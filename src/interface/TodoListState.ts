import { Dispatch, SetStateAction } from 'react';

export interface TodoListState {
    heading: string,
    name: string[],
    key: string
}

export type IProps = {
    setTodoList: Dispatch<SetStateAction<TodoListState[]>> 
}