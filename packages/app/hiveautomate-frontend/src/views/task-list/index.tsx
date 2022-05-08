import { Box, Text, Button, List } from 'grommet';
import React, { useState } from 'react';
import { Add } from '@mui/icons-material';
import { mutation, useMutation, useQuery } from '@hiveautomate/api'
import { WorkflowModal } from '../../modals/workflow-modal';
import { useNavigate } from 'react-router-dom';
import { TaskModal } from '../../modals/task-modal';

export interface TaskListProps  {

}

export const TaskList : React.FC<TaskListProps> = (props) => {
    const [ modalOpen, openModal ] = useState<boolean>(false);

    const navigate = useNavigate();
    const query = useQuery()

    const [ createProcess, createInfo ] = useMutation((mutation, args: {name: string}) => {
        // const item = mutation.createHiveProcesses({input: [{name: args.name}]})
        // return {
        //     item: {
        //         ...item.hiveProcesses[0]
        //     },
        //     err: null
        // }
    }, {
        suspense: false,
        awaitRefetchQueries: true,
        refetchQueries: [] //[query.hiveProcesses()]
    })
    // const workflow = query.hivePi
    const processes = query.automationTasks || []// query.hiveProcesses();

    return (
        <Box
            background="neutral-1"
            flex
            overflow="hidden"
            round="small"
            elevation="small">
           <TaskModal   
            open={modalOpen}
            onClose={() => openModal(false)}
            onSubmit={(task) => {
                createProcess({args: {name: task.name}}).then(() => {
                    openModal(false)
                })
            }} />
            <Box  
                align='center'
                pad="xsmall"
                background="accent-2" 
                direction="row" 
                justify="between">
                    <Text>Tasks</Text>
                    <Button 
                        hoverIndicator
                        plain
                        style={{padding: 6, borderRadius: 3}}
                        onClick={() => openModal(true)} 
                        icon={<Add fontSize='small' />} />
                </Box>
            <List 
                onClickItem={({item}) => navigate(`${item.id}`)}
                primaryKey={"name"}
                data={processes} />
        </Box>
    )
}