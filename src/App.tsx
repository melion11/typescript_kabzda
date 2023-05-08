import React, {useState} from 'react';
import './App.css';
import {OnOff} from './components/OnOff/OnOff';

function App() {

    const [onOff, setOnOff]  = useState(false);

    const onOffSwitcher = () => {
        setOnOff(!onOff)
    }

    return (
        <div>
            <OnOff onOff={onOff} onOffSwitcher={onOffSwitcher}/>

            {/*<PageTitle title={'This is app component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
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
