import React from 'react'
import Child from './Child'

const Parent = () => {
//creating an object
const ParentDetails={
    firstname:"akhil"
}

//create a function 
const parentFunction=(data)=>{

const {lastName}=data;

}
  return (
    <div>
    
         <Child childprops={ParentDetails} func={parentFunction}/>
        <label>LastName :</label>
        <input type="text" value=""/>
       
    </div>
  )
}

export default Parent