import React, {useState} from "react";

export default({createTask}) => {
    // updating state
    // description = what I am loading into state
    // setDescription = function that changes the state. Convention prefix "use" + name of the state
    const [description, setDescription] = useState(undefined);
    // function that is called when the submit button is hit
    const handleSubmit = e => {
        // if not used the submit will reload the whole page
        e.preventDefault();
        // inherited from app.js
        // mechanism to change state higher in the hierarchy
        // Function is defined and executed in App.js, but called from here with parameters from here
        createTask(description);
    }
    return(
        <div>
            <h2> New Task </h2>
            {/* executing click on submit*/}
            <form onSubmit = {e => handleSubmit(e)}>
                <div className="form-group">
                    <label htmlFor = "description"> </label>
                    <textarea
                        className="form-control"
                        id="description"
                        // need to understand this better. Apparently onChange emits an event, that is stored into "e"
                        onChange = {e => setDescription(e.target.value)}
                        >
                    </textarea>
                </div>
 
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

