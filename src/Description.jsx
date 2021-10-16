import React from 'react';
import './App.css'


const Description = (props)=>{
    return <div className ="descrip">
    <label>Task Title</label>
    <input name={props.name} type={props.type} onChange = {props.onChange} className="tTitle" type="text" placeholder='Enter task title'/>
</div>
  }
  

  export default Description

