import React, {useState} from 'react';
import s from './onOff.module.css'



export const OnOff = () => {

    const [onOff, setOnOff]  = useState(false);

    const onOffSwitcher = () => {
        setOnOff(!onOff)
    }

    const buttonClassName = onOff ? s.button__green : s.button__red;

    const onClickHandler = () => {
       onOffSwitcher()
    }

    return (
        <div className={s.onOff__wrapper}>
            <On selected={onOff}/>
            <Off selected={!onOff}/>
            <button className={buttonClassName} onClick={onClickHandler}></button>
        </div>
    );
};

type OnOffPropsType = {
    selected: boolean
}

const On = (props: OnOffPropsType) => {
    const onClassName = props.selected ? s.on__block_green : s.on__block;
    return <div className={onClassName}>On</div>
 }

const Off = (props: OnOffPropsType) => {
    const offClassName = props.selected ? s.off__block_red : s.off__block;
    return <div className={offClassName}>Off</div>
}
