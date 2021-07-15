import { useState } from "react"

const SimpleInput = (props) => {



  const [enteredName, setEnteredName] = useState("")
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const enteredNameIsvalid = enteredName.trim() !== "" 
  const nameInputisInvalid = !enteredNameIsvalid && enteredNameTouched

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    setEnteredNameTouched(true)

    if(!enteredNameIsvalid) {
      return 
    }
    

    console.log(enteredName)

    setEnteredName('')
    setEnteredNameTouched(false)
  }
 

  const nameInputClasses = nameInputisInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'> Your Name </label>
        <input  type='text' id='name' value={enteredName} onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
        {nameInputisInvalid && <p className={"error-text"}> Cannot be empty </p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
