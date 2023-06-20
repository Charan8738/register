import { useState } from 'react';
import './formInput.css';

function FormInput(props) {
    const{label,errorMessage,onChange,id, ...inputProps}=props;
    const[focussed,setFocussed]=useState(false);
    const handleFocus =(e)=>{
        setFocussed(true);
        
    };
  return (
    <div className="formInput">
     <label>{label}</label>
      <input 
      {...inputProps}
      onChange={onChange}
      onBlur={handleFocus}
      focussed={focussed.toString()}
      onFocus={() => 
        inputProps.name==="confirmPassword" &&  setFocussed(true)
    }
      />
      <span>{errorMessage}</span>
    </div>
  );
}

export default FormInput;