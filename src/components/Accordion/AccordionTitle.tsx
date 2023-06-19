import React from 'react';


type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: (accordionCollapsed: boolean)=>void
    accordionCollapsed: boolean
}

export const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')

    const onClickHandler = () => {
        props.setAccordionCollapsed(!props.accordionCollapsed)
    }

    return <h3 onClick={onClickHandler}>{props.title}</h3>
})

