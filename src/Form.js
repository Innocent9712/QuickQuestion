import React, {useState} from 'react';

function Form({handleSubmit}) {
    const [state, setState] = useState({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: ""
    })
    

    const handleChange = (e) => {
        const value = e.target.value
        setState((prevState) => ({
            ...prevState, [e.target.name] : value
        }))
    }

    const submitStuff = (e) => {
        e.preventDefault()
        if (
            state.question !== "" &&
            state.option1 !== ""  &&
            state.option2 !== ""  &&
            state.option3 !== ""  &&
            state.option4 !== ""
            ) {
            handleSubmit(state)        
            setState({
                question: "",
                option1: "",
                option2: "",
                option3: "",
                option4: ""
            })
        } else {
            console.log("Check all inputs.")
        }
    }

    return (
        <form className = "form-container grid container"  onSubmit={submitStuff}>
            <div className="grid">
                <label>Question</label>
                <textarea className="question-input" placeholder="Enter question" name="question" value={state.question} onChange={handleChange}></textarea>
            </div>
            <ul className=" option-container flex container">
                <li>
                    <input type="text" placeholder="Option 1" name="option1" value={state.option1} onChange={handleChange}/>
                </li>
                <li>
                    <input type="text" placeholder="Option 2" name="option2" value={state.option2} onChange={handleChange}/>
                </li>
                <li>
                    <input type="text" placeholder="Option 3" name="option3" value={state.option3} onChange={handleChange}/>
                </li>
                <li>
                    <input type="text" placeholder="Option 4" name="option4" value={state.option4} onChange={handleChange}/>
                </li>
            </ul>
            <button className="form-btn" type="submit">Done</button>
        </form>
    )
}

export default Form
