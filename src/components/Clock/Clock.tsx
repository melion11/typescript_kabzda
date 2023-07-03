import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'

const get2digitsClock = (num: number) => num < 10 ? `0${num}` : num

export type ClockType = 'analog' | 'digit'

export const Clock = () => {

    const [date, setDate] = useState<Date>(new Date())
    const [clockSwitcher, setClockSwitcher] = useState('analog')

    useEffect(() => {
        const timerId = +setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(timerId)
        }
    }, [])

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();


    const hourDeg = (hours * 30) + (minutes / 2);
    const minuteDeg = (minutes * 6) + (seconds / 10);
    const secondDeg = seconds * 6;


    const getClockHandler = (clock: ClockType) => {
        setClockSwitcher(clock)
    }


    return (
        <div className={s.container}>
            {
                clockSwitcher === 'analog' ?
                    <div className={s.analogClock}>
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className={s.clockNumber}>
                                {i + 1}
                            </div>
                        ))}
                        <div className={s.clockHands}>
                        <div className={`${s.clockHand} ${s.clockHandHour}`}   style={{ transform: `rotate(${hourDeg}deg)` }}></div>
                        <div className={`${s.clockHand} ${s.clockHandMinute}`} style={{ transform: `rotate(${minuteDeg}deg)` }}></div>
                        <div className={`${s.clockHand} ${s.clockHandSecond}`} style={{ transform: `rotate(${secondDeg}deg)` }}></div>
                        </div>
                    </div> :
                    <div className={s['digital-clock']}>
                        <span className={s['clock-digit']}>{get2digitsClock(hours)}</span>:
                        <span className={s['clock-digit']}> {get2digitsClock(minutes)}</span>:
                        <span className={s['clock-digit']}> {get2digitsClock(seconds)}</span>
                    </div>
            }
            <div className={s.btnContainer}>
                <button onClick={() => getClockHandler('analog')}>Analog Clock</button>
                <button onClick={() => getClockHandler('digit')}>Digit Clock</button>
            </div>
        </div>
    );
};

