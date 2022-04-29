import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/Header/Header';
import { Timer } from './components/Timer/Timer';
import './App.css';

function App() {
    return (
        <ChakraProvider>
            <Header />
            <Timer />
        </ChakraProvider>
    )
}

export default App;