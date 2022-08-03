import {React,useState,useEffect} from 'react'


function Button(props) {

    const [isChecked, setIsChecked] = useState("");
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    useEffect(() => {
            if(props.name === "Rhino" && isChecked){
                props.setRhino(true);
                props.setCount(1)
            } 
            if(props.name === "One"  && isChecked ){
                props.setOne(true);
                props.setCount(2)
            } 
            if(props.name === "Two"  && isChecked ){
                props.setTwo(true);
                props.setCount(3)
            } 
            if(props.name === "Three"  && isChecked){
                props.setThree(true);
                props.setCount(4)
            } 
            if(props.name === "Rhino" && isChecked === false){
                props.setRhino(false);
                props.setCount(5)
            } 
            if(props.name === "One"  && isChecked ===false ){
                props.setOne(false);
                props.setCount(6)
            } 
            if(props.name === "Two"  && isChecked === false ){
                props.setTwo(false);
                props.setCount(7)
            } 
            if(props.name === "Three"  && isChecked === false){
                props.setRhino(false);
                props.setCount(8)
            } 
    },[isChecked]);
    return (
        <>
            <div className='btn'>
                <input
                    type="checkbox"
                    id="topping"
                    name="topping"
                    value="Paneer"
                    checked={isChecked}
                    onClick={handleOnChange}
                />
                {props.name}
            </div>
        </>
    )
}

export default Button