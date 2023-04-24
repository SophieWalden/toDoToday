import React from 'react';
import "./taskCreationForm.css"

function TaskCreationForm(props){

    async function handleSubmit(e) {
      
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        let dataResults = {}

        for (let [key, value] of data.entries()){
            dataResults[key] = value;
        }

        props.FormData(dataResults);
        
    }

    function deleteTask(){
        props.FormData(null);
    }

    return (
        <div id="TaskCreationFormTab">
            <div id="TaskCreationFormContainer">
                <form id="TaskCreationForm" onSubmit={handleSubmit}>

                    
                    <div>
                        <label>
                            <p id="taskCreationNameText">Task Name:</p>
                            <input id="TaskCreationFormNameInput" type="text" name="Name" defaultValue={props.taskInfo["Name"]}/>
                        </label>
                    </div>

                    <div>
                        <label>
                            <p id="taskCreationDescriptionText">Description:</p>
                            <input id="TaskCreationFormDescription" type="text" name="Description" defaultValue={props.taskInfo["Description"]}/>
                        </label>
                    </div>


                    <div id="TaskCreationFormBottomDiv">
                        <label>
                            <p id="taskCreationPriorityText">Priority: </p>
                            <input id="TaskCreationFormPriority" type="text" name="Priority" defaultValue={props.taskInfo["Priority"]}/>
                        </label>

                        <label>
                            <button id="TaskCreationFormShareButton" disabled="true">Share</button>
                        </label>

                        <label>
                        <p id="taskCreationDateText">Date: </p>
                            <input id="TaskCreationFormDate" type="text" name="Date" defaultValue={props.taskInfo["Date"]}/>
                        </label>
                    </div>

                    <div>
                        <div id="EmptySpace"></div>
                        <button id="TaskCreationDeleteButton" onClick={() => deleteTask()}>Delete</button>
                        <button id="TaskCreationSubmissionButton">Add to Task Log</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TaskCreationForm;