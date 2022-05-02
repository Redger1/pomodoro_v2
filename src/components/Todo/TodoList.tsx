import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Table, Tbody, Tr, Td, TableContainer, } from '@chakra-ui/react'
import { IProps } from '../../interface/TodoListState'
import { v4 as uuidv4 } from 'uuid';

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
                    {todoList?.map(todo => (
                        <TabPanel key={todo.key} mt='40px' borderRadius='12px' borderColor='green.100' border='1px' fontSize='1.5rem' color='green.100'>
                            <TableContainer>
                                <Table>
                                    <Tbody>
                                        {todo.name.map(todoName => (
                                            <Tr key={uuidv4()}>
                                                <Td>{todoName}</Td>
                                                <Td>icons</Td>
                                            </Tr>
                                        ))}
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