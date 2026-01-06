Questão 1

1- Para evitar um render desnecessário eu já começo o state com setLoading(true)

2- O useEffect já assume que o data possui algo , mas se retornar null , vai quebrar a interface , pois o map monta a lista em cima de um array

3- Dentro da funcào de deletar , ele não espera se obteve sucesso no supabase e já deleta da minha interface, se der erro ao recarregar a página , o item volta para interface

4- A lista do .map estava sem o key , o react precisa disso para saber qual item é qual na lista

5- O botão permitia chamar a api várias vezes ao deletar , botei o loading para travar o click do botão


Observação o componente CustomerList nao deve possuir a responsabilidade de conhecer query da requisiçã para api . 

ele deve apenas chamar um hook customizado , dividindo assim as responsabilidades