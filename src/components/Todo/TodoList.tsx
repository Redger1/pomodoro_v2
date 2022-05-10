import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Table, Tbody, Tr, Td, TableContainer, } from '@chakra-ui/react'
import { IProps } from '../../interface/TodoListState'
import { TiEdit, TiDelete } from 'react-icons/ti'
import { v4 as uuidv4 } from 'uuid';

export function TodoList({todoList, setTodoList}: IProps) {

    function handleDeleteTodo(event : React.MouseEvent<HTMLElement>, todoName : string) {
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
        <div className='todo-list__container'>
            <Tabs width='1000px'>
                <TabList>
                    {todoList?.map((todo) => (
                        <Tab key={todo.key} _selected={{color: 'green.100'}} fontWeight='500' fontSize='1.5rem'>{todo.heading}</Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {todoList?.map((todo, todoIndex) => (
                        <TabPanel key={todo.key} mt='40px' borderRadius='12px' borderColor='green.100' border='1px' fontSize='1.5rem' color='green.100'>
                            <TableContainer>
                                <Table>
                                    <Tbody>
                                        {todo.name.map((todoName, index)=> {
                                            let todoBlock = <p key={index}>{todoName}</p>;
                                            let clicked = false
                                            return (
                                                <Tr className='todos_container' key={uuidv4()}>
                                                    <Td>
                                                        {todoBlock}
                                                    </Td>
                                                    <Td className='icons_container'>
                                                        <TiEdit />

                                                        <TiDelete 
                                                            data-name={todoName}
                                                            data-heading={todo.heading} 
                                                            data-index={todoIndex}
                                                            key={index} 
                                                            onClick={(e : any) => handleDeleteTodo(e, todoName)} 
                                                        />

                                                    </Td>
                                                </Tr>
                                            )
                                        })}
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </div>
    )
}