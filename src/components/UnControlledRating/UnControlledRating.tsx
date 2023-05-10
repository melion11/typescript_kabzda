import React, {useState} from "react";

// type RatingPropsType = {
//     value: 0 | 1 | 2 | 3 | 4 | 5;
// }

export function UnControlledRating() {
    console.log('UnControlledRating rendering')

    const [value, setValue] = useState(0)

    const addRating = (value:any) => {
        switch (value) {
            case 1:
                return setValue(1)
            case 2:
                return setValue(2)
            case 3:
                return setValue(3)
            case 4:
                return setValue(4)
            case 5:
                return setValue(5)
            default:
                return value
        }
    }

    const onClickButtonHandler1 = () => {
        addRating(1);
    }
    const onClickButtonHandler2 = () => {
        addRating(2);
    }
    const onClickButtonHandler3 = () => {
        addRating(3);
    }
    const onClickButtonHandler4 = () => {
        addRating(4);
    }
    const onClickButtonHandler5 = () => {
        addRating(5);
    }


       return (
        <div>
            <Star selected={value >= 1}/><button onClick={onClickButtonHandler1}>1</button>
            <Star selected={value >= 2}/><button onClick={onClickButtonHandler2}>2</button>
            <Star selected={value >= 3}/><button onClick={onClickButtonHandler3}>3</button>
            <Star selected={value >= 4}/><button onClick={onClickButtonHandler4}>4</button>
            <Star selected={value >= 5}/><button onClick={onClickButtonHandler5}>5</button>
        </div>
    );

}

type StarPropsType = {
    selected: boolean;
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

    if (props.selected) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }


}