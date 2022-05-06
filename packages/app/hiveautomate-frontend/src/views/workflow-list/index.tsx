import { Box, Button, List } from 'grommet';
import React, { useState } from 'react';
import { Add } from '@mui/icons-material';
import { mutation, useMutation, useQuery } from '@hiveautomate/api'
import { WorkflowModal } from '../../modals/workflow-modal';
import { useNavigate } from 'react-router-dom';

export interface WorkflowListProps {

}

export const WorkflowList : React.FC<WorkflowListProps> = (props) => {
    const navigate = useNavigate()

    const [ modalOpen, openModal ] = useState<boolean>(false);

    const query = useQuery()

    const [ createWorkflow, createInfo ] = useMutation((mutation, args: {name: string}) => {
        // const item = mutation.createHivePipelines({input: [{name: args.name}]})
        // return {
        //     item: {
        //         ...item.hivePipelines[0]
        //     },
        //     err: null
        // }
    }, {
        suspense: false,
        awaitRefetchQueries: true,
        refetchQueries: [] //[query.hivePipelines()]
    })
    // const workflow = query.hivePi
    const workflows = [] // query.hivePipelines();

    return (
        <Box
            flex
            overflow="hidden"
            round="small"
            background="neutral-1"
            elevation="small">
            <WorkflowModal 
                open={modalOpen} 
                onSubmit={(workflow) => {
                    createWorkflow({args: {name: workflow.name}}).then(() => {
                        openModal(false);
                    })
                }}
                onClose={() => openModal(false)} />
            <Box background="accent-2" direction="row" justify="end">
                <Button onClick={() => openModal(true)} icon={<Add />} />
            </Box>
            <List 
                onClickItem={({item}) => navigate(`${item.id}`)}
                primaryKey={"name"}
                data={workflows} />
        </Box>
    )
}