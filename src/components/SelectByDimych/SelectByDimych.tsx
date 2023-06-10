import React, {KeyboardEvent, FocusEventHandler, useState, useEffect} from 'react';
import s from './SelectByDimych.module.css'

export type ItemType = {
    title: string
    value: string
}

export type SelectPropsType = {
    value: string
    onChange: (value: string) => void
    items: ItemType[]
}

export const SelectByDimych = (props: SelectPropsType) => {

    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)

    useEffect(()=>{
        setHoveredElementValue(props.value)
    },[props.value])


    const toggleItems = () => setActive(!active)

    const onItemClick = (value: string) => {
       props.onChange(value)
       toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLElement>) => {

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendetnElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendetnElement) {
                        props.onChange(pretendetnElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <div className="center-container">
            <div className={s.selectWrap}  tabIndex={0} onKeyUp={onKeyUp}>
                <span className={s.main} onClick={toggleItems}>
                    {selectedItem ? selectedItem.title : 'none'}
                </span>

                {active &&
                    <ul className={`${s.selectList} ${active ? s['selectList--visible'] : ''}`}>
                        {props.items.map(i => {
                                return (
                                        <li key={i.value}
                                            onClick={() => onItemClick(i.value)}
                                            className={s.selectItem + ' ' + (hoveredItem === i ? s.selectItemHover : '')}
                                            onMouseEnter={()=>{setHoveredElementValue(i.value)}}
                                        >
                                            {i.title}
                                        </li>

                                ) }
                        )}
                    </ul>
                }
            </div>
        </div>
    );
};

