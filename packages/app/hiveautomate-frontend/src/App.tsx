import { Box, Text, List } from 'grommet';
import React from 'react';
import { Routes, Route, matchPath, Outlet, useNavigate} from 'react-router-dom'
import { TaskEditor } from './views/task-editor';
import { TaskList } from './views/task-list';
import { Workflows } from './views/workflow-editor';
import { WorkflowList } from './views/workflow-list';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { TriggerList } from './views/trigger-list';
import { TriggerEditor } from './views/trigger-editor';
import { HomeView } from './views/home';

const client = new ApolloClient({
    uri: process.env.REACT_APP_API ? `${process.env.REACT_APP_API}/graphql`: 'http://localhost:7000/graphql',
    cache: new InMemoryCache(),
    credentials: 'include'
})

export const App = (props: any) => {
    const navigate = useNavigate();

    const changeView = (name: string) => {
        navigate(name)   
    }

    const menu = [
        {
            label: "Workflows",
            path: "/workflows"
        },
        {
            label: "Tasks",
            path: "/tasks"
        },
        {
            label: "Triggers",
            path: '/triggers'
        }
    ]

    return (
        <ApolloProvider client={client}>

        <Box
            focusIndicator={false}
            background="neutral-2"
            direction="row" width="100%" height="100%">
            <Box 
                focusIndicator={false}
                width="small" elevation="small" background="brand"> 
                <List 
                    border={false}
                    pad={'none'}
                    onClickItem={({item}) => changeView(item.path)}
                    data={menu} 
                    primaryKey="label">
                    {(datum) => (
                        <Box 
                            focusIndicator={false}
                            hoverIndicator
                            pad={'xsmall'}
                            // background={matchPath(window.location.pathname, {path: `/dashboard/automate${datum.path}`}) ? 'accent-2': ''}
                            direction="row">
                            <Text>{datum.label}</Text>
                        </Box>
                    )}
                </List>  
            </Box>
            <Box 
                style={{borderRadius: 8, overflow: 'hidden'}}
                flex 
                pad="xsmall">
                <Routes>
                    <Route path={""} element={<HomeView/>} />
                    <Route path={"workflows"} element={<Outlet />}>
                        <Route path="" element={<WorkflowList/>} />
                        <Route path=":id" element={<Workflows />} />
                    </Route>
                    <Route path={"tasks"} element={<Outlet />}>
                        <Route path="" element={<TaskList />} />
                    <Route path={":id"} element={<TaskEditor/>} />

                    </Route>
                    <Route path={`triggers`} element={<Outlet/>} >
                        <Route path="" element={<TriggerList/>} />
                        <Route path={':id'} element={<TriggerEditor />} />
                    </Route>
                </Routes>
            </Box>

        </Box>
        </ApolloProvider>
    )
}