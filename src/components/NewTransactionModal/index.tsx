import * as M from './style';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';
interface ModalProps  {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose}: ModalProps){

    const [type, setType] = useState('deposit');

    

    return (
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button 
            className='react-modal-close'
            type="button"
            >
            <img src={closeImg} alt="" />
            </button>
            <M.Container>
            <h2>Cadastrar transação</h2>
            <input
            placeholder="Título"
            />
            <input
            type="number"
            placeholder="Valor"
            />
            <M.TransactionTypeContainer>
                <M.RadioBox
                type='button'
                onClick={()=>setType('deposit')}
                isActive={type==='deposit'}
                activeColor="green"
                >
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
                </M.RadioBox>
                <M.RadioBox
                type='button'
                onClick={()=>setType('withdraw')}
                isActive={type==='withdraw'}
                activeColor="red"
                >
                <img src={outcomeImg} alt="Saída" />
                <span>Saída</span>
                </M.RadioBox>
            </M.TransactionTypeContainer>
            <input
            placeholder="Categoria"
            />
            <button type='submit'>Cadastrar</button>
            
            </M.Container>
        </Modal>
    )
}