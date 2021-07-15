import {useRef, useState} from "react"

const SimpleInput = (props) => {


  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState("")

  const addInputNameHandler = (event) => {
    event.preventDefault()
    setEnteredName(event.target.value)
    console.log(enteredName)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    // setEnteredName(event.target.value)
    const enteredValue = nameInputRef.current.value
    nameInputRef.current.value = ""
    console.log(enteredValue)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'> Your Name </label>
        <input  ref={nameInputRef}  type='text' id='name' onChange={addInputNameHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
