import {useContext} from 'react';
import * as S from './style';
import incomeImg from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';


export function Summary(){
    const {transactions} = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction)=>{
        if(transaction.type==='deposit'){
            acc.deposits +=transaction.amount;
            acc.total += transaction.amount; 
        } else{
            acc.withdraw += transaction.amount;
            acc.total-=transaction.amount;
        }
        return acc;
    }, 
    {
    deposits: 0, 
    withdraw: 0,
    total: 0
    })
    
    return (
        <S.Container>
           <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="incomeImg"/>
                </header>
                <strong>+{summary.deposits}</strong>
           </div>
           <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="outcome"/>
                </header>
                <strong>-{summary.withdraw}</strong>
           </div>
           <div className='greenLight'>
                <header>
                    <p>Total</p>
                    <img src={total} alt="total"/>
                </header>
                <strong>{summary.total}</strong>
           </div>
        </S.Container>
    )
}