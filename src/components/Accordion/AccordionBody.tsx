import React, {useMemo} from 'react';
import {ItemType} from '../Select/Select';


type AccordionBodyPropsType = {
    items: ItemType[]
    onClick?: (value: string) => void
}


export const AccordionBody = React.memo((props: AccordionBodyPropsType) => {
    console.log('AccordionBody rendering')
    return <ul>
        {props.items.map((item, id) => {
            return (
                <li onClick={() => {
                    props.onClick?.(item.value)
                }} key={id}>{item.title}</li>
            );
        })}
    </ul>
})

