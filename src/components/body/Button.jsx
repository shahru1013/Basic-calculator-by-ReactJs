import React from 'react';
import './Button.css'
const isoper =(val)=>{
   return !isNaN(val);
}
const Button =(props)=>{
    return(
    
   <div>
      <div onClick={props.onClick} className={`${isoper(props.val)===true ? "btn":"ha"}`}>
        {props.val}
       </div>
   </div>
    );
}

export default Button
