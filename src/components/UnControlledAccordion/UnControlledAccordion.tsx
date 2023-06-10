import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './reducer';


type AccordionPropsType = {
    titleValue: string
}

export function UnControlledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')


    const [state, dispatch] = useReducer(reducer, {collapsed: false})


        return <div>
            {/*<AccordionTitle  title={props.titleValue} collapsed={collapsed}/>*/}
            <AccordionTitle onClick={()=> {dispatch({type: TOGGLE_COLLAPSED})}} title={props.titleValue} />
            { !state.collapsed && <AccordionBody/>}
        </div>

}

type AccordionTitlePropsType = {
    title: string
    onClick: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')

    // const onclickButtonHandler = () => {
    //     props.collapsedFunc();
    // }

    // return <h3 style={{cursor: 'pointer'}} onClick={()=>{props.setCollapsed(!props.collapsed)}}>{props.title}</h3>
    return <h3 style={{cursor: 'pointer'}} onClick={()=>{props.onClick()}}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>n
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

