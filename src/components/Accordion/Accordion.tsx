import React from "react";

type AccordionPropsType = {
    titleValue: string
    setAccordionCollapsed: (accordionCollapsed: boolean)=>void
    accordionCollapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

        return <div>
            <AccordionTitle title={props.titleValue} setAccordionCollapsed={props.setAccordionCollapsed} accordionCollapsed={props.accordionCollapsed}/>
            {!props.accordionCollapsed && <AccordionBody/> }
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

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;