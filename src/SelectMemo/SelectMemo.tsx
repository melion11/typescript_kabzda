import React, {KeyboardEvent, FocusEventHandler, useState, useEffect, memo} from 'react';
import s from './SelectMemo.module.css'

export type ItemType = {
    id: string
    country: string
    city: string
    population: number
}

export type SelectPropsType = {
    value: string
    onChange: (value: string) => void
    items: ItemType[]
}

export const SelectMemo = memo((props: SelectPropsType) => {
    console.log('select rendering')
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(el => el.id === props.value)
    const hoveredItem = props.items.find(el => el.id === hoveredElementValue)

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
                if (props.items[i].id === hoveredElementValue) {
                    const pretendetnElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendetnElement) {
                        props.onChange(pretendetnElement.id)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].id)
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
                    {selectedItem ? selectedItem.city : 'none'}
                </span>

                {active &&
                    <ul className={`${s.selectList} ${active ? s['selectList--visible'] : ''}`}>
                        {props.items.map(i => {
                                return (
                                        <li key={i.id}
                                            onClick={() => onItemClick(i.id)}
                                            className={s.selectItem + ' ' + (hoveredItem === i ? s.selectItemHover : '')}
                                            onMouseEnter={()=>{setHoveredElementValue(i.id)}}
                                        >
                                            {i.city}
                                        </li>
                                ) }
                        )}
                    </ul>
                }
            </div>
        </div>
    );
});

