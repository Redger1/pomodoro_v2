import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/Header/Header';
import { Timer } from './components/Timer/Timer';
import { TodoList } from './components/Todo/TodoList';
import { TodoListState } from './interface/TodoListState';
import './App.css';

function App() {
    const [todoList, setTodoList]  = useState<TodoListState[]>([]);

    return (
        <ChakraProvider>
            <Header setTodoList={setTodoList} />
            <Timer />
            <TodoList todoList={todoList} setTodoList={setTodoList} />
        </ChakraProvider>
    )
}

export default App;