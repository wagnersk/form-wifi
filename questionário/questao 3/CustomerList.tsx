// CustomerList.tsx
import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';

interface Customer {
    id: string;
    name: string;
    email: string;
}


export function CustomerList({ storeId }: { storeId: string }) {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase
            .from('customers')
            .select('*')
            .eq('store_id', storeId)
            .then(({ data, error }) => {
                if (error) {
                    console.error(error);
                    setLoading(false);
                    return;
                }
                setCustomers(data ?? []);
                setLoading(false);
            });
    }, []);


    const handleDelete = (id: string) => {
        setLoading(true);
        /* 2 erro */
        supabase.from('customers')
            .delete()
            .eq('store_id', storeId)
            .eq('id', id)
            .then((error) => {
                if (error) {
                    console.error(error);
                    setLoading(false);
                    return;
                }
                const updatedCustomers = customers.filter(c => c.id !== id);
                setCustomers(updatedCustomers)
                setLoading(false);
            })
    };


    return (
        <div>
            {customers.map(customer => (
                <div key={customer.id}>
                    {customer.name} - {customer.email}
                    <button disabled={loading} onClick={() => handleDelete(customer.id)}>
                        Eliminar
                    </button>
                </div>
            ))}
        </div>
    );
}