import type {Meta, StoryObj} from '@storybook/react';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {SelectByDimych} from './SelectByDimych';




const meta: Meta<typeof SelectByDimych> = {
    title: 'SelectByDimych',
    component: SelectByDimych,
};

export default meta;

type Story = StoryObj<typeof SelectByDimych>;

const onClickCallback = action('item was clicked')

const SelectByDimychTest = () => {

    // const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [selectValue, setSelectValue] = useState<string>('none')

    return   <SelectByDimych value={selectValue} onChange={setSelectValue} items={[{title: 'Ilya', value: '1'}, {title: 'Pasha', value: '2'}, {title: 'Vlad', value: '3'}]}/>
}
export const SelectByDimychComponent: Story = {
    render: () => <SelectByDimychTest/>,
};
export const SelectByDimychPresentation: Story = {
    args: {
        items:[{title: 'Ilya', value: '1'}, {title: 'Pasha', value: '2'}, {title: 'Vlad', value: '3'}],
        value: 'none',
        onChange: value => {}
    },
};
