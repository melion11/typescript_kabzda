import React, {useMemo, useState} from 'react';
import './App.css';
import {OnOff} from './components/OnOff/OnOff';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

import {SelectByDimych} from './components/SelectByDimych/SelectByDimych';
import {Clock} from './components/Clock/Clock';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;


function App() {

    const [rating, setRating] = useState<RatingValueType>(0)

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    const [onOff, setOnOff]  = useState<boolean>(false);

    const itemsForAccordion = useMemo(()=>{
        return [{title: 'Ilya', value: '1'}, {title: 'Pasha', value: '2'}, {title: 'Vlad', value: '3'}]
    },[accordionCollapsed])

    const itemsForSelect = useMemo(()=>{
        return [{title: 'Ilya', value: '1'}, {title: 'Pasha', value: '2'}, {title: 'Vlad', value: '3'}]
    },[])

    return (
        <div>
            {/*<OnOff onOff={onOff} setOnOff={setOnOff}/>*/}
            {/*<Rating value={rating} setRating={setRating}/>*/}
            {/*<Accordion*/}
            {/*    titleValue={'Menu'}*/}
            {/*    accordionCollapsed={accordionCollapsed}*/}
            {/*    setAccordionCollapsed={setAccordionCollapsed}*/}
            {/*    items={itemsForAccordion} />*/}
            {/*/!*<Select value={'none'} onChange={()=>{}} items={items}/>*!/*/}
            {/*<SelectByDimych value={'none'}  items={itemsForSelect}/>*/}
            <Clock/>
        </div>
    );
}

// type PageTitlePropsType = {
//     title: string
// }
//
// function PageTitle(props: PageTitlePropsType) {
//     console.log('PageTitle rendering')
//     return <h1>{props.title}</h1>;
// }

export default App;
