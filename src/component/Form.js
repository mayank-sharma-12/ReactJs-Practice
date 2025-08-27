import React from 'react' 

function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form is submitted");
}

function Form() {
    return(
        <form onSubmit={handleFormSubmit}>
            <input placeholder="Enter something..." />
            <button>Submit</button>
        </form>
    )
}

export default Form;