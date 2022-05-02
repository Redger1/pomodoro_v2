import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/Header/Header';
import { Timer } from './components/Timer/Timer';
import { TodoList } from './components/Todo/TodoList';
import { TodoListState } from './interface/TodoListState';
import './App.css';

function App() {
    // Стейт для списка дел, которы передается в пропсы Header и TodoList
    // Для того, чтобы связать эти два элемента и вывести список дел
    // const initialState = {
    //     name: '',
    //     done: false,
    //     key: 0
    // }
    const [todoList, setTodoList]  = useState<TodoListState[]>([]);

    return (
        <ChakraProvider>
            <Header todoList={todoList} setTodoList={setTodoList} />
            <Timer />
            <TodoList  />
        </ChakraProvider>
    )
}

export default App;