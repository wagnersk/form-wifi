# # Cria a tabela loyalty_points que permita registar transações de pontos (ganhos e gastos) para cada cliente. Inclui campos que consideres relevantes.

CREATE TABLE loyalty_points (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES customers(id),
  store_id UUID REFERENCES stores(id),
  points INTEGER NOT NULL,
  transaction_type TEXT NOT NULL CHECK (transaction_type IN ('earn', 'redeem')), 
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
);









 # # Escreve uma RLS policy para a tabela customers que garanta que cada utilizador (owner da loja) só consegue ver e modificar os clientes das suas próprias lojas.

VER  = select
MODIFICAR = insert , update e delete

CREATE POLICY "Só o dono da loja consegue ver" 
ON customers
FOR SELECT
USING (
  EXISTS (
    SELECT 1 
    FROM stores 
    WHERE stores.owner_id = customers.store_id 
      AND stores.owner_id = auth.uid()
  )
);

----------------------------------------------------------------


CREATE POLICY "Só o dono da loja consegue inserir dados" 
ON customers
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1
    FROM stores
    WHERE stores.id = customers.store_id
      AND stores.owner_id = 'a514c4ef-c56a-45a4-8444-17ffd8e8c7b'
  )
);

----------------------------------------------------------------

CREATE POLICY "Só o dono da loja consegue atualizar dados" 
ON customers
FOR UPDATE
USING (
  EXISTS (
    SELECT 1
    FROM stores
    WHERE stores.id = customers.store_id
      AND stores.owner_id = auth.uid()
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1
    FROM stores
    WHERE stores.id = customers.store_id
      AND stores.owner_id = auth.uid()
  )
);

----------------------------------------------------------------

CREATE POLICY "Só o dono da loja consegue deletar dados" 
ON customers
FOR DELETE
USING (
  EXISTS (
    SELECT 1
    FROM stores
    WHERE stores.id = customers.store_id
      AND stores.owner_id = auth.uid()
  )
);




# # Cria uma função SQL ou trigger que calcule automaticamente o saldo atual de pontos de um cliente (soma de ganhos menos gastos).


CREATE OR REPLACE FUNCTION get_customer_balance(p_customer_id UUID)
RETURNS INTEGER AS $$
DECLARE
    totalEarn INTEGER;
    totalRedeem INTEGER;
    saldo INTEGER;
BEGIN

    SELECT COALESCE(SUM(points), 0)
    INTO totalEarn
    FROM loyalty_points
    WHERE customer_id = p_customer_id
      AND transaction_type = 'earn'

    SELECT COALESCE(SUM(points), 0)
    INTO totalRedeem
    FROM loyalty_points
    WHERE customer_id = p_customer_id
      AND transaction_type = 'redeem';

    saldo := totalEarn - totalRedeem;

    RETURN saldo;
END;
 $$ LANGUAGE plpgsql;








 # # Bónus: Como implementarias uma regra que expire pontos após 12 meses da sua atribuição?

 
CREATE OR REPLACE FUNCTION validate_redeem()
RETURNS TRIGGER AS $$
DECLARE
    total_earn INTEGER;
    total_redeem INTEGER;
    current_balance INTEGER;
BEGIN
    SELECT COALESCE(SUM(points), 0)
    INTO total_earn
    FROM loyalty_points
    WHERE customer_id = NEW.customer_id
      AND transaction_type = 'earn'
      AND created_at >= now() - interval '12 months';

    SELECT COALESCE(SUM(points), 0)
    INTO total_redeem
    FROM loyalty_points
    WHERE customer_id = NEW.customer_id
      AND transaction_type = 'redeem';

    current_balance := total_earn - total_redeem;

    IF NEW.transaction_type = 'redeem' AND NEW.points > current_balance THEN
        RAISE EXCEPTION 'Saldo insuficiente para realizar este redeem. Saldo atual: %', current_balance;
    END IF;

    RETURN NEW;
END;
 $$ LANGUAGE plpgsql;
