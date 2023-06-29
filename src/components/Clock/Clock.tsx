import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'



export const Clock = () => {

    const [date, setDate] = useState<Date>(new Date())


    useEffect(()=> {
      const timerId = +setInterval(()=>{
                setDate(new Date())
            }, 1000)

        return ()=> {
            clearInterval(timerId)
        }
    },[])

    const hours = new Intl.DateTimeFormat('ru-Ru',
        {hour: 'numeric'}).format(date)

    const minutes = new Intl.DateTimeFormat('ru-Ru',
        {minute: 'numeric'}).format(date)

    const seconds = new Intl.DateTimeFormat('ru-Ru',
        {second: 'numeric'}).format(date)

    return (
        <div className={s['digital-clock']}>
            <span className={s['clock-digit']}>{hours.length <= 1 ? `0${hours}` : hours}</span>:
            <span className={s['clock-digit']}> {minutes.length <= 1 ? `0${minutes}` : minutes}</span>:
            <span className={s['clock-digit']}> {seconds.length <= 1 ? `0${seconds}` : seconds}</span>
        </div>
    );
};

