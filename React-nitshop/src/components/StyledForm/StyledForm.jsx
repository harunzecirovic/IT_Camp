import React, { useState}  from "react";
import StyledButton from "../styledButton/styledButton"
import StyledInput from '../StyledInput/StyledInput'

const StyledForm = (props) => {
    const[name,setName] = useState('')
    const[lastName,setLastName] = useState('')

    function nameHandler(e){
        setName(e.target.value)
    }

    function lastNameHandler(e){
        setLastName(e.target.value)
    }

return(
    <div>
    <StyledInput onChangeHandler={nameHandler} value={name}/>
    <StyledInput onChangeHandler={lastNameHandler} value={lastName}/>
    <StyledButton 
    onClickHandler={() => props.sendData(name,lastName)}
    innerText='Send' />
    </div>
)}

export default StyledForm