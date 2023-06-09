import type {Meta, StoryObj} from '@storybook/react';
import {Simulate} from 'react-dom/test-utils';
import input = Simulate.input;
import {ChangeEvent, useRef, useState} from 'react';


const meta: Meta<typeof input> = {

    title: '/input/UncontrolledInput',
    // component: input,
    argTypes: { onChange: { action: 'change' } },
};


export default meta;

type Story = StoryObj<typeof input>;

// Наш неконтролируемый инпут - 1 история
const Input = () => {
    return <input/>
};

// Наш неконтролируемый инпут со отслеживанием значения - 2 история
const UncontrolledInputWithValue = () => {

    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <>
            <input value={value} onChange={onChangeHandler}/> - {value}
        </>
    )
};

// Наш контролируемый инпут с фиксированным значением - 3 история
const ControlledFixInput = () => {
    return  <input value={'123'} />
};

// Наш контролируемый инпут с кнопкой сохранения значения - 4 история
const ControlledInputWithValue = () => {

    const [value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }


    return (
        <>
            <input ref={inputRef}/> <button onClick={onClickHandler}>save</button> - actual value: {value}
        </>
    )
};






// Наши рендер инпутов с названиями историй

export const UncontrolledInput: Story = {
    render: () => <Input/>,
};

export const TrackValueOfUnControlledInput: Story = {
    render: () => <UncontrolledInputWithValue/>,
};

export const ControlledInputWithFixedValue: Story = {
    render: () => <ControlledFixInput/>,
};

export const GetValueOfControlledInputByButtonPress: Story = {
    render: () => <ControlledInputWithValue/>,
};


