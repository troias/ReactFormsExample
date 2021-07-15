import React, { useState } from 'react'

const useInput = (validateValue) => {

    const [enteredValue, setEnteredValue] = useState("")
    const [touched, setTouched] = useState(false)
   

    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && touched

    const valueChangedHandler = (event) => {
        setEnteredValue(event.target.value)
    }

    const InputBlurHandler = (event) => {
        setTouched(true)
    }

    const reset = () => { 
        setEnteredValue("")
        setTouched(false)
    }
      
    return {
        value: enteredValue,
        hasError,
        valueChangedHandler,
        InputBlurHandler, 
        reset, 
        isValid: valueIsValid,
       
    }
}

export default useInput
