import React, {useState} from "react";


type AccordionPropsType = {
    titleValue: string
}

export function UnControlledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')


    const [collapsed, setCollapsed] = useState(false)

    const collapsedFunc = () => {
        setCollapsed(!collapsed )

    }


        return <div>
            <AccordionTitle collapsedFunc={collapsedFunc} title={props.titleValue}/>
            { !collapsed && <AccordionBody/>}
        </div>

}

type AccordionTitlePropsType = {
    title: string
    collapsedFunc: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')

    const onClickTitleHandler = () => {
        props.collapsedFunc()
    }

    return <h3 style={{cursor: 'pointer'}} onClick={onClickTitleHandler}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

