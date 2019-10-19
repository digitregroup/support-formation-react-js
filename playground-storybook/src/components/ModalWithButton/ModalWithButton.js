import React, {useState} from 'react'
import {AwesomeButton} from "../AwesomeButton/AwesomeButton";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {CounterButton} from "../CounterButton/CounterButton";

export const ModalWithButton = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <>
            <CounterButton onClick={toggleModal}>Ouvrir la modal</CounterButton>

            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>{props.title}</ModalHeader>
                <ModalBody>
                    {props.children}
                </ModalBody>
                <ModalFooter>
                    <AwesomeButton onClick={toggleModal}>Do Something</AwesomeButton>{' '}
                    <AwesomeButton dark onClick={toggleModal}>Cancel</AwesomeButton>
                </ModalFooter>
            </Modal>
        </>
    );
};