import {  useReducer } from 'react'

const defaultState = { 
    enteredValue: "", 
    touched: false, 
    valueIsValid: false,
    hasError: false
}

const inputReducer = (state, action) => {
    switch (action.type) {
        case "VALUE_CHANGED":
            
            return {
                ...state, 
                enteredValue: action.payload
            }
        
        case "INPUT_BLUR":
            return {
                ...state, 
                touched: true
            }
        case "RESET":
            return {
                ...state, 
                enteredValue: "",
                touched: false
            }

        default:
           return defaultState
    }
}

const useInput = (validateValue) => {

 
    const [state, dispatch] = useReducer(inputReducer, defaultState)
 

     state.valueIsValid = validateValue(state.enteredValue)
     state.hasError = !state.valueIsValid && state.touched

    const valueChangedHandler = (event) => {
        dispatch({ 
            type: "VALUE_CHANGED", 
            payload: event.target.value
        })
    }

    const InputBlurHandler = (event) => {
        dispatch({ 
            type: "INPUT_BLUR", 
        })
    }

    const reset = () => { 
        dispatch({ 
            type: "RESET", 
        })
    }
      
    return {
        value: state.enteredValue,
        hasError: state.hasError,
        valueChangedHandler,
        InputBlurHandler, 
        reset, 
        isValid: state.valueIsValid,
       
    }
}

export default useInput
