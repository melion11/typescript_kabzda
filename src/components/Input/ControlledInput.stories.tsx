import type {Meta, StoryObj} from '@storybook/react';
import {Simulate} from 'react-dom/test-utils';
import input = Simulate.input;
import {ChangeEvent, useRef, useState} from 'react';
import { action } from '@storybook/addon-actions';
import {log} from 'util';



const meta: Meta<typeof input> = {

    title: '/input/ControlledInput',
    // component: input,
};


export default meta;

type Story = StoryObj<typeof input>;

// Наш контролируемый инпут  - 1 история


const ControlledInputType = () => {

    const [parentValue, setParentValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <>
            <input value={parentValue} onChange={action('want to change')}/> - {parentValue}
        </>
    )
};

// Наш контролируемый инпут-чекбокс  - 2 история
const ControlledCheckboxType = () => {

    const [value, setValue] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    return (
        <>
            <input type={'checkbox'} id="js"  checked={value} onChange={onChangeHandler}/><label htmlFor="js">js</label>
            <input type={'checkbox'} id="css" checked={value} onChange={onChangeHandler}/><label htmlFor="css">css</label>
            <input type={'checkbox'} id="react" checked={value} onChange={onChangeHandler}/><label htmlFor="react">react</label>

        </>
    )
};

// Наш контролируемый селект  - 3 история
const ControlledSelectType = () => {

    const [value, setValue] = useState<number | undefined>(1)

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(+e.currentTarget.value)
    }

    return (
        <>
            <select value={value} onChange={onChangeHandler}>
                <option>none</option>
                <option value={1}>JS</option>
                <option value={2}>Css</option>
                <option value={3}>React</option>
            </select>
        </>
    )
};

// Наши рендер инпутов с названиями историй

export const ControlledInput: Story = {
    render: () => <ControlledInputType/>,
};

export const ControlledInputCheckbox: Story = {
    render: () => <ControlledCheckboxType/>,
};

export const ControlledSelect: Story = {
    render: () => <ControlledSelectType/>,
};



