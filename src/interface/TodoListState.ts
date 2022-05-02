import { Dispatch, SetStateAction } from 'react';

export interface TodoListState {
    heading: string,
    name: string[],
    key: string
}

export type IProps = {
    todoList?: TodoListState[]
    setTodoList: Dispatch<SetStateAction<TodoListState[]>> 
}