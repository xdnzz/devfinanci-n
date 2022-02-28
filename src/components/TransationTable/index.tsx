import * as T from './style';
import { useTransactions } from '../hooks/useTransactions';



export function TransationTable(){
const {transactions} = useTransactions();
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