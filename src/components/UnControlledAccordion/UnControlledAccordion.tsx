import React, {useState} from "react";


type AccordionPropsType = {
    titleValue: string
}

export function UnControlledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')


    const [collapsed, setCollapsed] = useState(false)

    // const collapsedFunc = () => {
    //     setCollapsed(!collapsed )
    //
    // }



        return <div>
            <AccordionTitle setCollapsed={setCollapsed} title={props.titleValue} collapsed={collapsed}/>
            { !collapsed && <AccordionBody/>}
        </div>

}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: (collapsed:boolean)=>void
    collapsed:boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')

    // const onclickButtonHandler = () => {
    //     props.collapsedFunc();
    // }

    return <h3 style={{cursor: 'pointer'}} onClick={()=>{props.setCollapsed(!props.collapsed)}}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>n
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

