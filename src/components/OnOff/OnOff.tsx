import React from 'react';
import s from './onOff.module.css'

type onOffPropsType = {
    on: boolean
}

export const OnOff = (props: onOffPropsType) => {


    return (
        <div className={s.onOff__wrapper}>
            <On selected={props.on}/>
            <Off selected={!props.on}/>
            <Button selected={props.on}/>
        </div>
    );
};

type OnOffPropsType = {
    selected: boolean
}

const On = (props: OnOffPropsType) => {
    if (props.selected) {
        return <div className={s.on__block_green}>On</div>
    } else {
        return <div className={s.on__block}>On</div>
    }
}

const Off = (props: OnOffPropsType) => {
    if (props.selected) {
        return <div className={s.off__block_red}>Off</div>
    } else {
        return <div className={s.off__block}>Off</div>
    }
}

const Button = (props: OnOffPropsType) => {
    if (props.selected) {
        return <div className={s.button__green}>On</div>
    } else {
        return <div className={s.button__red}>Off</div>
    }
}
