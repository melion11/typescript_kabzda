import React, {ChangeEvent, FocusEventHandler, useState} from 'react';
import s from './Select.module.css'

export type ItemType = {
    title: string
    value: string
}

export type SelectPropsType = {
    value: string
    onChange: (value: string) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    const [selectValue, setSelectValue] = useState<string>(props.value)

    const onClickValueHandler = (value: string) => {
        const el = props.items.find(el => el.value === value)
        setSelectValue(el ? el.title : 'none')
        setAccordionCollapsed(false)
        props.onChange(value)
    }

    const handleClick = () => {
        setAccordionCollapsed(!accordionCollapsed)
    }

    const handleBlur: FocusEventHandler<HTMLElement> = () => {
        setAccordionCollapsed(false)
    }

    const handleMouseEnter = (event: React.MouseEvent<HTMLLIElement>) => {
        event.currentTarget.style.backgroundColor = 'lightgray';
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLLIElement>) => {
        event.currentTarget.style.backgroundColor = '';
    };

    return (
        <div className="center-container">
            <div onClick={handleClick} className={s.selectWrap} onBlur={handleBlur} tabIndex={0}>
                {selectValue}
                {accordionCollapsed &&
                    <ul className={`${s.selectList} ${accordionCollapsed ? s['selectList--visible'] : ''}`}>
                        <li value={'none'}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => onClickValueHandler('none')} className={s.selectItem}>none
                        </li>
                        {props.items.map(i => {
                                return (
                                    <React.Fragment key={i.value}>
                                        <li
                                            onClick={() => onClickValueHandler(i.value)}
                                            className={s.selectItem}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {i.title}
                                        </li>
                                    </React.Fragment>)
                            }
                        )}
                    </ul>
                }
            </div>
        </div>
    );
};

