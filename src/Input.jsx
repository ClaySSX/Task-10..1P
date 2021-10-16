import React from "react";

const Input = (props) => {
    return( <div >
        <label >{props.label}</label>
        <input className={props.inputClass} type={props.type} value={props.value} name={props.name} onChange={props.onChange} placeholder={props.placeholder}/> {props.text}
        <br></br>
    </div>)
}

export default Input;