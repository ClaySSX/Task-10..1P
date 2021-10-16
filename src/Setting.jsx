import React from 'react';

function Setting(props){
    return <div class="suburb">
    <label>Suburb</label>
    <input name={props.name} type={props.type} onChange = {props.onChange}placeholder='Enter suburb'/>
</div>
  }
  

  export default Setting