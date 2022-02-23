import * as S from './style';
import incomeImg from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';


export function Summary(){
    return (
        <S.Container>
           <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="incomeImg"/>
                </header>
                <strong>+ R$1000,00</strong>
           </div>
           <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="outcome"/>
                </header>
                <strong>- R$500,00</strong>
           </div>
           <div className='greenLight'>
                <header>
                    <p>Total</p>
                    <img src={total} alt="total"/>
                </header>
                <strong>R$500,00</strong>
           </div>
        </S.Container>
    )
}