import type {Meta, StoryObj} from '@storybook/react';
import {OnOff} from '../OnOff/OnOff';
import React, {ChangeEvent, useState} from 'react';


const meta: Meta<typeof OnOff> = {

    title: '/OnOffSwitcher/OnOff',
    component: OnOff,
    argTypes: { setOnOff: { action: 'clicked' } },
};

export default meta;


type Story = StoryObj<typeof OnOff>;

export const OnOffSwitcher = (args:any) => {
/*

    const [onOff, setOnOff]  = useState<boolean>(false);
*/

    return (
        <>
            <OnOff onOff={false} {...args}/>
        </>
    )
};


export const OnOffPresentation: Story = {

    args: {
        onOff: true,
        setOnOff: (onOff)=> {},
    },
};

export const On: Story = {

    render: () => <OnOffSwitcher/>,
};

