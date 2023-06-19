import React, {useMemo} from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type ItemType = {
    title: string
    value: any

}

type AccordionPropsType = {
    titleValue: string
    setAccordionCollapsed: (accordionCollapsed: boolean)=>void
    accordionCollapsed: boolean
    items: ItemType[]
    onClick?: (value: string)=>void
}

export const Accordion = React.memo((props: AccordionPropsType) => {
    console.log('Accordion rendering')

        return <div>
            <AccordionTitle title={props.titleValue} setAccordionCollapsed={props.setAccordionCollapsed} accordionCollapsed={props.accordionCollapsed}/>
            {!props.accordionCollapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
        </div>

})


