import { useEffect, useState } from 'react';
import * as T from './style';
import { api } from '../../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type:string;
    category: string;
    createdAt: string;
}

export function TransationTable(){

    const [transactions, setTransactions] = useState<Transaction[]>([]); 

    useEffect(()=>{
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    },[])
    return (
        <T.Container>
            <table>
                <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
                </thead>
            <tbody>
                {transactions.map(transaction => (
                <tr key={transaction.id}>
                    <td>{transaction.title}</td>
                    <td className={transaction.type}>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'

                    }).format(transaction.amount)
                    }
                    </td>
                    <td>{transaction.category}</td>
                    <td>{transaction.createdAt}</td>
                </tr>
                ))}    
            </tbody>
        </table>
        
        </T.Container>
    )
}