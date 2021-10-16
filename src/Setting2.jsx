import React from 'react';

function Setting2(props){
    return <div class="descrip">
    <label>Date</label>
    <input name={props.name} type={props.type} onChange = {props.onChange}placeholder type='date'/>
</div>
  }
  

  export default Setting2