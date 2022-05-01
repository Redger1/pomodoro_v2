import { HStack, Button, useDisclosure } from '@chakra-ui/react';
import { ModalWindow } from '../Modal/Modal';

function Header() {
    const logo = require("../../asset/resource/Pomodoro_timer.svg");
    const onOpen = useDisclosure();

    return (
        <HStack justifyContent='space-between'>
            <img src={logo} />
            <ModalWindow />
        </HStack>
    )
}

export { Header };