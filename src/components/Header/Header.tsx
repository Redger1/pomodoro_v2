import { HStack, Button } from '@chakra-ui/react';

function Header() {
    const logo = require("../../asset/resource/Pomodoro_timer.svg");

    return (
        <HStack justifyContent='space-between'>
            <img src={logo} />
            <Button color='white' bgColor='green.400'>Новый сценарий +</Button>
        </HStack>
    )
}

export { Header };