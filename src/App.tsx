import React, {useState} from 'react';
import './App.css';
import {OnOff} from './components/OnOff/OnOff';
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {Rating} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;


function App() {

    const [rating, setRating] = useState<RatingValueType>(0)

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    const [onOff, setOnOff]  = useState<boolean>(false);


    return (
        <div>
            <OnOff onOff={onOff} setOnOff={setOnOff}/>
            <Rating value={rating} setRating={setRating}/>
            <Accordion titleValue={'Menu'} accordionCollapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed} />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>;
}

export default App;
