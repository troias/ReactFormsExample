import { useState, useEffect } from "react"
import useInput from '../customHooks/useInput'

const SimpleInput = (props) => {

  console.log()
  const emailValidation = (value) => { 
    return value.includes('@') && value.trim() !== ''
  }

  const nameInputValidation = (value) => { 
     return value.trim() !== ""  
  }
  let formIsValid = false 


  const {
    value: enteredNameValue, 
    hasError: nameInputError,
    valueChangedHandler: nameChangeHandler,
    InputBlurHandler: nameInputBlurHandler,
    isValid: valueIsValid, 
    reset: resetInput
  } = useInput(nameInputValidation)

  const {
    value: enteredEmailValue, 
    hasError: emailInputError,
    valueChangedHandler: emailChangeHandler,
    InputBlurHandler: emailInputBlurHandler,
    isValid: emailIsValid, 
    reset: resetEmail
  } = useInput(emailValidation)

  const formSubmitHandler = (event) => {
    event.preventDefault()
    nameInputBlurHandler(true)

    if (!emailIsValid) {
      return
    }
    resetInput()
    resetEmail()
  }

  if (emailIsValid && valueIsValid) {
    formIsValid = true
  }
  const nameInputClasses = nameInputError ? 'form-control invalid' : 'form-control'
 
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'> Your Name </label>
        <input
          type='text'
          id='name'
          value={enteredNameValue}
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler} />
          <br/>
           <input
          type='email'
          id='email'
          value={enteredEmailValue}
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler} />
        {nameInputError && <p className={"error-text"}> Cannot be empty </p>}
        {emailInputError && <p className={"error-text"}> Does not include "@" </p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
