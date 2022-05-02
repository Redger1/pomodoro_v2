import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure, Button, Input,} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IProps } from '../../interface/TodoListState';

export function ModalWindow({todoList, setTodoList} : IProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [inputFields, setInputFields] = useState<string[]>([''])
    const [todoHeading, setTodoHeading] = useState<string>('');

    function handleAddFields() {
        setInputFields([...inputFields, ''])
    }

    function handleChangeInput(event: ChangeEvent<HTMLInputElement>, index: number) {
        const values = [...inputFields];
        values[index] = event.target.value;
        setInputFields(values)
    }

    function handleHeadingChange(event : ChangeEvent<HTMLInputElement>) {
        setTodoHeading(event.target.value);
    }

    function addTodos() {
        if(inputFields.length > 0) {
            setTodoList(todoList => [...todoList, {heading: todoHeading, name: inputFields, key: uuidv4()}]);
        }
        onClose();
    }

    return (
        <>
            <Button color='white' bgColor='green.400' onClick={onOpen}>Новый сценарий +</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Новый сценарий</ModalHeader>
                    <ModalBody className='modal__body'>
                        <Input 
                            onChange={(event) => handleHeadingChange(event)}
                            mb='20px'
                            placeholder='Новый сценарий'
                        />

                        {inputFields.map((inputField : string, index : number) => (
                            <Input
                                name='inputValue'
                                key={index}
                                placeholder={"Действие " + (index + 1)}
                                value={inputField}
                                onChange={(event) => handleChangeInput(event, index)}
                                mb='20px'
                            />
                        ))}

                    </ModalBody>
                    <ModalFooter>
                        <Button
                            width='50%'
                            color='green.400'
                            border='2px'
                            borderColor='green.400'
                            mr={3}
                            variant='ghost'
                            onClick={handleAddFields}>
                                Добавить действие
                        </Button>
                        <Button 
                            width='50%'
                            color='white'
                            bgColor='green.400'
                            onClick={addTodos}>
                                Готово
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
