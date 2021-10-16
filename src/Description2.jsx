import React from 'react';
import './App.css'


const Description2 = (props)=>{
    return <div className ="descrip">
    <label>Task Description</label>
    <textarea name={props.name} type={props.type} placeholder={props.placeholder} onChange = {props.onChange} className="description" rows="2" cols="25" type="text" placeholder='Enter task description'></textarea>
</div>
  }
  

  export default Description2

