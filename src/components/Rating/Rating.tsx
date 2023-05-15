import React from "react";
import {RatingValueType} from "../../App";

type RatingPropsType = {
    value: RatingValueType
    setRating: (value:RatingValueType)=>void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')



    return (
        <div>
            <Star selected={props.value >= 1} onClickRating={()=>props.setRating(1)}/>
            <Star selected={props.value >= 2} onClickRating={()=>props.setRating(2)}/>
            <Star selected={props.value >= 3} onClickRating={()=>props.setRating(3)}/>
            <Star selected={props.value >= 4} onClickRating={()=>props.setRating(4)}/>
            <Star selected={props.value >= 5} onClickRating={()=>props.setRating(5)}/>
            {/*<Star selected={props.value >= 5} setRating={props.setRating} value={5}/>*/}
        </div>
    );

}

type StarPropsType = {
    selected: boolean;
    onClickRating: ()=>void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

    const onClickHandler = () => {
        props.onClickRating()
    }


   return <span onClick={onClickHandler}>{props.selected ? <b>star </b> : 'star '}</span>


}