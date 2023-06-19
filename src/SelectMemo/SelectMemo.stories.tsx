import type {Meta, StoryObj} from '@storybook/react';
import React, {useMemo, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {SelectMemo} from './SelectMemo';


const meta: Meta<typeof SelectMemo> = {
    title: 'SelectMemo',
    component: SelectMemo,
};

export default meta;

type Story = StoryObj<typeof SelectMemo>;





    const SelectMemoTest = () => {

    const selectState =
            [
                {id: '1', country: 'Belarus', city: 'Minsk', population: 400000},
                {id: '2', country: 'Belarus', city: 'Brest', population: 100000},
                {id: '3', country: 'Belarus', city: 'Grodno', population: 300000},
                {id: '4', country: 'USA', city: 'New-York', population: 5000000},
                {id: '5', country: 'USA', city: 'Chicago', population: 2000000},
                {id: '6', country: 'USA', city: 'Los-Angeles', population: 3000000},
                {id: '7', country: 'Ukraine', city: 'Odessa', population: 1000000},
                {id: '8', country: 'Ukraine', city: 'Kiev', population: 1500000},
                {id: '9', country: 'Ukraine', city: 'Chernigov', population: 100000}
            ]

    const [selectValue, setSelectValue] = useState<string>('none')
    const [counter, setCounter] = useState<number>(0)
    const [country, setCountry] = useState(selectState)

        const itemsWithPopulation = useMemo(()=> {
            return country.filter(el=> el.population < 1000000)
        }, [country])

        const itemsFromBelarus = useMemo(()=> {
            return country.filter(el=> el.country === 'Belarus')
        }, [country])

        const itemsWithE = useMemo(()=> {
            return country.filter(el=> el.city.indexOf('e') > - 1)
        }, [country])


    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <SelectMemo value={selectValue} onChange={setSelectValue} items={itemsWithPopulation}/>
            <SelectMemo value={selectValue} onChange={setSelectValue} items={itemsFromBelarus}/>
            <SelectMemo value={selectValue} onChange={setSelectValue} items={itemsWithE}/>
            <button style={{width: '20px'}} onClick={() => {setCounter(counter + 1)}}>+</button>
            {counter}
        </div>)
}

export const SelectMemoTestComponent: Story = {
    render: () => <SelectMemoTest/>,
};


export const SelectMemoBelarus: Story = {
    args: {
        items: [
            {id: '1', country: 'Belarus', city: 'Minsk', population: 400000},
            {id: '2', country: 'Belarus', city: 'Brest', population: 100000},
            {id: '3', country: 'Belarus', city: 'Grodno', population: 300000}],
        value: 'none',
        onChange: value => {
        }
    },
};

export const SelectMemoUSA: Story = {
    args: {
        items: [
            {id: '1', country: 'USA', city: 'New-York', population: 5000000},
            {id: '2', country: 'USA', city: 'Chicago', population: 2000000},
            {id: '3', country: 'USA', city: 'Los-Angeles', population: 3000000}],
        value: 'none',
        onChange: value => {
        }
    },
};

export const SelectMemoUkraine: Story = {
    args: {
        items: [
            {id: '1', country: 'Ukraine', city: 'Odessa', population: 1000000},
            {id: '2', country: 'Ukraine', city: 'Kiev', population: 1500000},
            {id: '3', country: 'Ukraine', city: 'Chernigov', population: 100000}],
        value: 'none',
        onChange: value => {
        }
    },
};
