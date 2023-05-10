import React, {useState} from 'react';
import './App.css';
import {OnOff} from './components/OnOff/OnOff';
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";

function App() {

    return (
        <div className={'wrapper'}>
            <OnOff/>


            <UnControlledAccordion titleValue={'Menu'} />
            <UnControlledAccordion titleValue={'Users'} />
            <UnControlledRating/>


            {/*<PageTitle title={'This is app component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}
            {/*Article 1*/}
            {/*<UnControlledRating value={3}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<UnControlledRating value={0}/>*/}
            {/*<UnControlledRating value={1}/>*/}
            {/*<UnControlledRating value={2}/>*/}
            {/*<UnControlledRating value={3}/>*/}
            {/*<UnControlledRating value={4}/>*/}
            {/*<UnControlledRating value={5}/>*/}
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
