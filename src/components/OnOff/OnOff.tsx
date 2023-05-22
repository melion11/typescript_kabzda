import React, {useState} from 'react';
import s from './onOff.module.css'

export type OnOffType = {
    onOff: boolean
    setOnOff: (onOff: boolean) => void

}

export const OnOff = (props: OnOffType) => {

    const buttonClassName = props.onOff ? s.button__green : s.button__red;
    const onClassName = props.onOff ? s.on__block_green : s.on__block;
    const offClassName = !props.onOff ? s.off__block_red : s.off__block;

    const onOffSwitcher = () => {
        props.setOnOff(!props.onOff)
    }

    const onClickHandlerSwitcher = () => {
        onOffSwitcher()
    }

    const onClickHandler = (value:boolean) => {
        props.setOnOff(value)
    }

    return (
        <div className={s.onOff__wrapper}>

            <div onClick={()=>onClickHandler(true)} className={onClassName}>On</div>
            <div onClick={()=>onClickHandler(false)} className={offClassName}>Off</div>

            <button className={buttonClassName} onClick={onClickHandlerSwitcher}></button>

        </div>
    );
};

