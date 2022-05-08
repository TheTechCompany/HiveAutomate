import { Box, Text, Button, List } from 'grommet';
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
        const item = mutation.createAutomation({input: {name: args.name}})

        return {
            item: {
                ...item
            }
        }
    }, {
        suspense: false,
        awaitRefetchQueries: true,
        refetchQueries: [query.automations] 
    })

    const workflows = query.automations || [];

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
            <Box background="accent-2" align="center" pad="xsmall" direction="row" justify="between">
                <Text>Workflows</Text>
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
                data={workflows} />
        </Box>
    )
}