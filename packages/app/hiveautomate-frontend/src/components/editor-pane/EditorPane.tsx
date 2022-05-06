import { Box } from 'grommet';
import  React from 'react';
import { EditorMenu } from './EditorMenu';
import { Schema, Settings } from '@mui/icons-material';
import { useMemo } from 'react';

export interface EditorPaneProps {
    onViewChange?: (view: string) => void;
    view?: string;

    menu?: any;
}

export const EditorPane : React.FC<EditorPaneProps> = (props) => {

    const onClick = (view: string) => {
        props.onViewChange?.(view)
    }

    const menu = useMemo(() => {
        console.log(props.view)
        return [
            {icon: <Schema />, active: props.view == 'nodes', onClick: () => { onClick('nodes') }},
            {icon: <Settings />, active: props.view == 'settings', onClick: () => { onClick('settings') }},
        ]
    }, [props.view])

    return (
        <Box
            flex
            direction="row">
            <Box flex>
                {props.children}
            </Box>
                <EditorMenu 
                    menu={menu}
                    view={props.menu}
                    />   
        </Box>
    )
}