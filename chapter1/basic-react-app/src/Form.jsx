function handleFormSubmit(event){
    console.log("Form Submited");
    console.log(event);
    event.preventDefault();
}

function Form(){
    return(
        <form onSubmit={handleFormSubmit}>
            <input /><br /><br />
            <button>Submit</button>
        </form>
    )
}

export default Form