import React from "react";

type ItemType = {
    title: string
    value: any

}

type AccordionPropsType = {
    titleValue: string
    setAccordionCollapsed: (accordionCollapsed: boolean)=>void
    accordionCollapsed: boolean
    items: ItemType[]
    onClick: (value: string)=>void
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

        return <div>
            <AccordionTitle title={props.titleValue} setAccordionCollapsed={props.setAccordionCollapsed} accordionCollapsed={props.accordionCollapsed}/>
            {!props.accordionCollapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
        </div>

}

type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: (accordionCollapsed: boolean)=>void
    accordionCollapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')

    const onClickHandler = () => {
        props.setAccordionCollapsed(!props.accordionCollapsed)
    }

    return <h3 onClick={onClickHandler}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: string)=>void
}



function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return <ul>
        {props.items.map((item,id) => {
            return (
                <li onClick={()=>{props.onClick(item.value)}} key={id}>{item.title}</li>
            );
        })}
    </ul>
}

export default Accordion;