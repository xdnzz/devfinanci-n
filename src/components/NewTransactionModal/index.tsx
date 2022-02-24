import * as M from './style';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';
interface ModalProps  {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose}: ModalProps){

    const [type, setType] = useState('deposit');
    const [value, setValue] = useState(0);
    const [category, steCategory] = useState('');
    const [title, setTitle] = useState('');

    function handleCreateNewTransactino(event: FormEvent){
        event.preventDefault();

    }

    const data = {
        title, 
        value,
        category,
        type,
    };

    api.post('/transactions', data)
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
            <M.Container onSubmit={handleCreateNewTransactino}>
            <h2>Cadastrar transação</h2>
            <input
            placeholder="Título"
            value={title}
            onChange={event => setTitle(event.target.value)}
            />
            <input
            type="number"
            placeholder="Valor"
            value={value}
            onChange={event => setValue(Number(event.target.value))}
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
            value={category}
            onChange={event => steCategory(event.target.value)}
            />
            <button type='submit'>Cadastrar</button>
            
            </M.Container>
        </Modal>
    )
}