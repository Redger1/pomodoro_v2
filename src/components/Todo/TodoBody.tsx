import { Tbody, Tr, Td } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid';
import { TiDelete, TiEdit } from 'react-icons/ti';
import { TodoBodyProps } from '../../interface/TodoBodyProps';
import React from 'react'

export function TodoBody({todoList, setTodoList, todo, todoIndex} : TodoBodyProps) {
    function handleDeleteTodo(event : React.MouseEvent<SVGElement>, todoName : string) {
        const heading = event.currentTarget.getAttribute('data-heading')
        const indexToFind = Number(event.currentTarget.getAttribute('data-index'))

        if (todoList != undefined) {
            let sortedTodos: string[] = []

            todoList.forEach(todo => {
                if (todo.heading === heading) {
                    sortedTodos = [...todo.name].filter(todoItem => todoItem != todoName)
                }
            })

            const tmpState = todoList.slice()
            tmpState.map((todoItem, index) => {
                if (index === indexToFind) {
                    todoItem.name = sortedTodos
                }
            })

            setTodoList(tmpState)
        }
    }

    return (
        <Tbody>
            {todo.name.map((todoName, index)=> {
                let todoBlock = <p key={index}>{todoName}</p>;
                return (
                    <Tr className='todos_container' key={uuidv4()}>
                        <Td>
                            {todoBlock}
                        </Td>
                        <Td className='icons_container'>
                            <TiEdit />

                            <TiDelete 
                                data-heading={todo.heading} 
                                data-index={todoIndex}
                                key={index} 
                                onClick={(e : React.MouseEvent<SVGElement>) => handleDeleteTodo(e, todoName)} 
                            />
                        </Td>
                    </Tr>
                )
            })}
        </Tbody>
    )
}
