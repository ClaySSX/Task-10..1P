import React from 'react';



function Price(props){
    return <div className='Budget'>
      <input name={props.name} type={props.type} placeholder={props.placeholder} onChange = {props.onChange} placeholder='$'/>
</div>
  }
  

  export default Price