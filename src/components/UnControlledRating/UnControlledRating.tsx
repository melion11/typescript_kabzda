import React, {useState} from "react";

// type RatingPropsType = {
//     value: 0 | 1 | 2 | 3 | 4 | 5;
// }

export function UnControlledRating() {
    console.log('UnControlledRating rendering')

    const [value, setValue] = useState(0)

    const addRating = (value: number) => {
        setValue(value)
    }



return (
    <div>
        <Star addRating={() => addRating(1)} selected={value >= 1}/>
        <Star addRating={() => addRating(2)} selected={value >= 2}/>
        <Star addRating={() => addRating(3)} selected={value >= 3}/>
        <Star addRating={() => addRating(4)} selected={value >= 4}/>
        <Star addRating={() => addRating(5)} selected={value >= 5}/>
    </div>
);

}

type StarPropsType = {
    selected: boolean;
    addRating: (value: number) => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

    const onClickButtonHandler = (value: any) => {
        props.addRating(value);
    }

    // return props.selected ? <span style={{cursor: 'pointer'}} onClick={onClickButtonHandler}> <b>star</b></span>  :
    // <span style={{cursor: 'pointer'}} onClick={onClickButtonHandler}> star</span>

    return <span style={{cursor: 'pointer'}} onClick={onClickButtonHandler}> {props.selected ? <b>star</b> : 'star'}</span>


}