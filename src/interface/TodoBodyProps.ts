import { Dispatch, SetStateAction } from "react";
import { TodoListState } from "./TodoListState";

export interface TodoBodyProps {
    todoList?: TodoListState[]
    setTodoList: Dispatch<SetStateAction<TodoListState[]>> 
    todo: TodoListState,
    todoIndex: number
}