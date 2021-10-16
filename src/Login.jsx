import React,{useState} from 'react'
import Input from './Input'
import './App.css';
import Setting from './Setting';
import Setting2 from './Setting2';
import Price from './Price';
import Price2 from './Price2';
import Button from './Button';
import Header from './Header'
import Description from './Description';
import Description2 from './Description2';

const Login = (props)=>{

        const [contact, setContact] = useState({
            taskType: '',
            tTitle: '',
            description: '',
            suburb: '',
            date: '',
            budget:'',
            price: ''
        })
       
    

    
    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }

    


    const handleLogin = ()=>{
        fetch('http://localhost:8080/Task', {
            method: 'post',
            headers:{'Content-Type':'application/json'},
            body : JSON.stringify({
                taskType : contact.taskType,
                tTitle: contact.tTitle,
                description: contact.description,
                suburb: contact.suburb,
                date: contact.date,
                budget: contact.budget,
                price: contact.price,   
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
            console.log("Error:" + err)
        })
    }

    
    const[isToggled, setIsToggled] =useState(false);
    return <div className= 'header-div'>
        
       <Header
        htext='New task '
       />
       <br></br>
       <div className = 'taskType'>
        <p1 className = 'H1'>Select Task Type:</p1>
        <input onClick={()=> setIsToggled(!isToggled)} onChange = {props.onChange} className='Ip' name = 'rad1' type = "radio" value = 'inPerson' ></input><p1 className = 'H1'>In Person</p1>
        <input onChange = {props.onChange} className='Online' name = 'rad1' type = "radio" value ='online'></input><p1 className = 'H1'>Online</p1>
        </div>
      

       <br></br>
       <Header
        htext='Describe your tasks to experts'
       />

       <br></br>
       <Description
       name='tTitle'
       type= 'string'
       onChange = {handleChange}
       value = {contact.tTitle}
       />
       <Description2
       name='description'
       type= 'string'
       onChange = {handleChange}
       value = {contact.description}
       />

       <br></br>
       <Header
        htext='Setting up your task'
       />
        <br />
        {isToggled &&<Setting
         name='suburb'
         type= 'string'
         onChange = {handleChange}
         value = {contact.suburb}
        />}
        <Setting2
            name='date'
            type= 'string'
            onChange = {handleChange}
            value = {contact.date}
        />
        <br />
        <Header
            htext='Setting up your task'
       />
        <br />
        <Price2
            name ='budget'
            onChange = {handleChange}
            options={['Total', 'Hourly rate']}
            value={contact.budget} 
        />
        <Price
            name = 'price'
            type ='string'
            onChange = {handleChange}
            value = {contact.price}
        />
       
        <Button 
           type = 'submit'
           text='Submit'
           onClick= {handleLogin}
       />
       <br></br>
    </div>

}
export default Login