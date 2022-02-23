import * as H from './style'
import {useState} from 'react';
import Modal from 'react-modal';
import LogoSVG from '../../assets/logo.svg';

interface HeaderProps  {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}:HeaderProps){


    return (
        <H.Container>
         
            <H.Content>
                <img src={LogoSVG} alt="logo"/>
                <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
            </H.Content>
        </H.Container>
    )
}