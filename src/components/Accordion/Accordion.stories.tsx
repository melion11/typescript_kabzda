import type {Meta, StoryObj} from '@storybook/react';
import React, {useState} from 'react';
import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions';




const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const onClickCallback = action('item was clicked')

const AccordionTest = () => {

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return  <Accordion titleValue={'Menu'} accordionCollapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed} onClick={(value:string)=>{alert(`user with id ${value}`)}}
                       items={[{title: 'Ilya', value: '1'}, {title: 'Pasha', value: '2'}, {title: 'Vlad', value: '3'}]}
    />
}
export const AccordionComponent: Story = {
    render: () => <AccordionTest/>,
};
export const AccordionPresentation: Story = {
    args: {
        items:[{title: 'Ilya', value: '1'}, {title: 'Pasha', value: '2'}, {title: 'Vlad', value: '3'}],
        accordionCollapsed: true,
        setAccordionCollapsed: (accordionCollapsed:boolean)=> {},
        titleValue: 'Menu',
    },
};

