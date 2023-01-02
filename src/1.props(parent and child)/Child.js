import React from 'react'

const Child = (props) => {
  
    const {firstname} =props.childprops;

    const childDetails={
        lastName:"rathipelly"
    }
   
    props.func(childDetails)
  return (
    <div>
        <label>firstname :</label>
        <input type="text"  value={firstname}/>
    </div>
  )
}

export default Child;