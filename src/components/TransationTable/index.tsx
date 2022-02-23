import { useEffect } from 'react';
import * as T from './style';
import { api } from '../../services/api';


export function TransationTable(){
    useEffect(()=>{
        api.get('transactions')
        .then(res => console.log(res.data))
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
                <tr>
                    <td>Desenvolvimento de WebSite</td>
                    <td className='deposit'>$12.000</td>
                    <td>Desenvolvimento</td>
                    <td>04/01/2022</td>
                </tr>
                <tr>
                    <td>Aluguel</td>
                    <td className='withDraw'>-$1.000</td>
                    <td>Casa</td>
                    <td>05/01/2022</td>
                </tr>
                
            </tbody>
        </table>
        
        </T.Container>
    )
}