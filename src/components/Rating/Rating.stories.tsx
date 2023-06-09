import type {Meta, StoryObj} from '@storybook/react';
import {Rating} from './Rating'
import React, {useState} from 'react';
import {RatingValueType} from '../../App';



const meta: Meta<typeof Rating> = {

    title: 'Rating',
    component: Rating,
};

export default meta;
type Story = StoryObj<typeof Rating>;

const TestRating = () => {

    const [rating, setRating] = useState<RatingValueType>(0)

    return (
        <>
            <Rating value={rating} setRating={(value)=>setRating(value)}/>
        </>
    )
};

export const RatingPresentation: Story = {

    args: {
        value: 1,
        setRating: (value)=>{}
    },
};

export const RatingT: Story = {

    render: () => <TestRating/>,
};
