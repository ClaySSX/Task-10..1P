import React from 'react';
import Input from './Input';




const Price2 = (props) => {
  return( <div className='Budget' onChange={props.onChange} value={props.value}>
      <div><label>What is your budget?</label></div>
      <div><label>(This is an estimate)</label></div>
      <Input type='radio' value={props.options[0]} name={props.name} text={props.options[0]} />
      <Input type='radio' value={props.options[1]} name={props.name} text={props.options[1]} />
  </div>)}
  

  export default Price2