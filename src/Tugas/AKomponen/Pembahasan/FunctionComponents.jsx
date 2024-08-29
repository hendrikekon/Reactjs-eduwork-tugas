import { useState } from "react";

const FunctionalComponent = (props) => {
    const [value, setValue] = useState(0)

    const handleClickPlus = () => {
        setValue(value + 1);
    }
    
    const handleClickMinus = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    }

    return(
        <div>
            <h1>Hello {props.nama} I am Learning Functional Component</h1>
            <p>This is a functional component</p>
            <button onClick={handleClickMinus}>-</button>
            <span>{' '}{value}{' '}</span>
            <button onClick={handleClickPlus}>+</button>
        </div>  
    )
}

export default FunctionalComponent;

// >>>> note belajar: untuk destructuring

// const FunctionalComponent =({nama}) => {
//     return(
//         <div>
//             <h1>Hello {nama} I am Learning Functional Component</h1>
//             <p>This is a functional component</p>
//         </div>
//     )
// }
// export default FunctionalComponent;
