import type {Meta, StoryObj} from '@storybook/react';
import React, {useMemo, useState} from 'react';


const meta = {
    title: 'UseState',
    // component: Example1

} as Meta;

export default meta;


type Story = StoryObj<typeof meta>;

function generateData() {
    return 1
}

export const Counter = () => {

   // const initValue = useMemo(generateData, [])

        const [counter, setCounter] = useState(generateData)


        return (
            <div>
                <button onClick={() => {setCounter(counter + 1)}}>+</button>
                {counter}
            </div>
        )
    }
;

export const Example: Story = {
    render: () => (
        <Counter/>
    ),
};