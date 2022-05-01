import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure, Button, Input,} from '@chakra-ui/react';
import { useState } from 'react';

export function ModalWindow() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [numInputs, setNumInputs] = useState<number>(1)

    const allInputs = [];

    for(let i = 0; i < numInputs; i++) {
        allInputs.push(<Input key={i} mb='20px' placeholder={"Действие " + (i + 1)} />)
    }

    function addInput() {
        setNumInputs(prevState => prevState + 1);
    }

    function closeModal() {
        setNumInputs(1);
        onClose();
    }

    return (
        <>
            <Button color='white' bgColor='green.400' onClick={onOpen}>Новый сценарий +</Button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Новый сценарий</ModalHeader>
                    <ModalBody className='modal__body'>
                        <Input mb='20px' placeholder='Новый сценарий' />
                        {allInputs}
                    </ModalBody>
        
                    <ModalFooter>

                        <Button
                            width='50%'
                            color='green.400'
                            border='2px'
                            borderColor='green.400'
                            mr={3}
                            variant='ghost'
                            onClick={addInput}>
                                Добавить действие
                        </Button>

                        <Button 
                            width='50%'
                            color='white'
                            bgColor='green.400'
                            onClick={closeModal}>
                                Готово
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
