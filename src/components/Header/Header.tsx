import { HStack } from '@chakra-ui/react';
import { IProps } from '../../interface/TodoListState';
import { ModalWindow } from '../Modal/ModalWindow';

function Header({setTodoList} : IProps) {
    const logo = require("../../asset/resource/Pomodoro_timer.svg");

    return (
        <HStack justifyContent='space-between'>
            <img src={logo} />
            <ModalWindow setTodoList={setTodoList} />
        </HStack>
    )
}

export { Header };