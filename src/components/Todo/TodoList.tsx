import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export function TodoList() {
    return (
        <div className='todo-list__container'>
            <Tabs width='1000px'>
                <TabList>
                    <Tab _selected={{color: 'green.100'}} fontWeight='500' fontSize='1.5rem'>Новая вкладка</Tab>
                    <Tab _selected={{color: 'green.100'}} fontWeight='500' fontSize='1.5rem'>Новая вкладка 2</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel mt='40px' borderRadius='12px' borderColor='green.100' border='1px' fontSize='1.5rem' color='green.100'>

                    </TabPanel>
                    <TabPanel mt='40px' borderRadius='12px' borderColor='green.100' border='1px' fontSize='1.5rem' color='green.100'>

                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}