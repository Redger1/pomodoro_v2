import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Table, TableContainer, } from '@chakra-ui/react'
import { IProps } from '../../interface/TodoListState'
import { TodoBody } from './TodoBody';

export function TodoList({todoList, setTodoList}: IProps) {
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
                                    <TodoBody
                                        todoList={todoList}
                                        setTodoList={setTodoList}
                                        todo={todo}
                                        todoIndex={todoIndex}
                                    />
                                </Table>
                            </TableContainer>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </div>
    )
}