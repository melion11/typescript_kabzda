import React, {useState} from 'react';


export function UnControlledRating() {
    console.log('UnControlledRating rendering')

    const [value, setValue] = useState(0)

    const addRatingHandler = (value:any) => {
        setValue(value)
    }


    return (
        <div>
            <Star addRating={()=>addRatingHandler(1)} selected={value >= 1}/>
            <Star addRating={()=>addRatingHandler(2)} selected={value >= 2}/>
            <Star addRating={()=>addRatingHandler(3)} selected={value >= 3}/>
            <Star addRating={()=>addRatingHandler(4)} selected={value >= 4}/>
            <Star addRating={()=>addRatingHandler(5)} selected={value >= 5}/>
        </div>
    );

}

type StarPropsType = {
    addRating: () => void
    selected: boolean;
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

    const onClickButtonHandler = () => {
        props.addRating();
    }
    return <span style={{cursor: 'pointer'}} onClick={onClickButtonHandler}>{props.selected ? <b>star</b> : 'star'} </span>

}