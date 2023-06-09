import type {Meta, StoryObj} from '@storybook/react';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select} from './Select';




const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

const onClickCallback = action('item was clicked')

const SelectTest = () => {

    // const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    // const [selectValue, setSelectValue] = useState<string>('none')

    return   <Select value={'none'} onChange={()=>{}} items={[{title: 'Ilya', value: '1'}, {title: 'Pasha', value: '2'}, {title: 'Vlad', value: '3'}]}/>
}
export const SelectComponent: Story = {
    render: () => <SelectTest/>,
};
export const SelectPresentation: Story = {
    args: {
        items:[{title: 'Ilya', value: '1'}, {title: 'Pasha', value: '2'}, {title: 'Vlad', value: '3'}],
        value: 'none',
        onChange: value => {}
    },
};
