import type {Meta, StoryObj} from '@storybook/react';
import React, {useEffect, useMemo, useState} from 'react';


const meta = {
    title: 'UseEffect',
    // component: Example1

    //api.getUsers().then())
    //setInterval
    //indexDataBase
    //document.ElementById
    //document.title = 'User'

} as Meta;

export default meta;


type Story = StoryObj<typeof meta>;


export const SimpleExample = () => {

        const [fake, setFake] = useState(1)
        const [counter, setCounter] = useState(1)

        console.log('SimpleExample')

        useEffect(() => {
            console.log('useEffect every render')
            document.title = counter.toString()
        })

        useEffect(() => {
            console.log('useEffect only first render (componentDidMount')
            document.title = counter.toString()

        }, [])

        useEffect(() => {
            console.log('useEffect first render and every counter change')
            document.title = counter.toString()

        }, [counter])


        return (
            <div>
                Hello, {counter}
                <button onClick={() => {setFake(fake + 1)}}>fake+</button>
                <button onClick={() => {setCounter(counter + 1)}}>counter+</button>

            </div>
        )
    }
;

export const SetTimeoutExample = () => {

        const [fake, setFake] = useState(1)
        const [counter, setCounter] = useState(1)

        console.log('SetTimeoutExample')

        // useEffect(() => {
        //     setTimeout(()=> {
        //         console.log('setTimeout')
        //         document.title = counter.toString()
        //     }, 1000)
        // },[counter])

    useEffect(() => {
        setInterval(()=> {
            console.log('setTimeout tick')
            setCounter((state)=> state + 1)
        }, 1000)
    },[])


        return (
            <div>
                Hello, counter: {counter} -  fake:{fake}
                {/*<button onClick={() => {setFake(fake + 1)}}>fake+</button>*/}
                {/*<button onClick={() => {setCounter(counter + 1)}}>counter+</button>*/}

            </div>
        )
    }
;


export const Example1: Story = {
    render: () => (
        <SimpleExample/>
    ),
};


export const Example2: Story = {
    render: () => (
        <SetTimeoutExample/>
    ),
};