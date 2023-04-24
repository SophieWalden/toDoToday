import React from 'react';
import "./taskView.css"

import TaskCreationForm from "./taskCreationForm.jsx" 

function TaskView(props){
    const [listName, setListName] = React.useState("Tasks")
    const [sortFunction, setSortFunction] = React.useState("Date");

    let initTasks = [];
    const [tasks, setTasks] = React.useState(initTasks);
    const [currentEditingTask, setCurrentEditingTask] = React.useState({});

    function sortTasks(tasks){
        // Takes a list of objects and sorts them based on an attribute sortFunction which can be controlled by the user
        return tasks.sort((p1, p2) => typeof p1[sortFunction] == "string" ? p1[sortFunction].localeCompare(p2[sortFunction]) : p1[sortFunction] - p2[sortFunction]);
    }

    const [showCreateForm, setShowCreateForm] = React.useState(false);
    function createNewReminder(){
        setCurrentEditingTask({});
        setShowCreateForm(true);
    }

    function editReminder(task){
        setTasks(
            tasks.filter(function(item){
                return item.id != task.id;
            })
        )
        
        setCurrentEditingTask(task);
        setShowCreateForm(true);
        
    }

    function handleNewReminder(task){
        setShowCreateForm(false); 
        updateTasks();
        
        if (task == null || task.Name == "") return;

        task.id = Math.max(...tasks.map(o => o.id)) + 1;

        tasks.push(task);
        updateTasks();
    }

    function getTasks(){
        // Returns tasks as stored in the database
        fetch(`http://127.0.0.1:5000/tasks/getTasks/${props.email}` 
            , {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: "cors"
            }
        ).then(res => {
            return res.json()
        }).then(json => {
            setTasks(json);
        });
    }

    function updateTasks(){
        // Takes the current list of tasks and updates it to be the same in the database
        fetch('http://127.0.0.1:5000/tasks/updateTasks/' 
            , {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"email": props.email, "tasks": tasks})

            }
        )

    }

    React.useEffect(() => {
        getTasks();
    }, []);

    return (
        <div id="TaskTab">
            <div id="TaskContainer">

                {showCreateForm == true && <TaskCreationForm taskInfo={currentEditingTask} FormData={handleNewReminder} />}

                <div id="taskContainerNavBar">
                    <div id="taskContainerNavBarTitle">
                        Your list: {listName}
                    </div>

                    <div id="taskContainerSortFunctions">
                        <div id="taskContainerSortButtons">
                            Sort By: 
                            <button onClick={() => setSortFunction("Date")}>Date</button>
                            <button onClick={() => setSortFunction("Name")}>Name</button>
                            <button onClick={() => setSortFunction("Priority")}>Priority</button>
                        </div>
                    </div>
                </div>

                

                <div id="taskContainerContent">
                <table id='taskContainerTable'>
                    <thead>
                        <tr key={"header"}>
                         
                            <th>Title</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Date</th>
                            
                        </tr>
                    </thead>



                    <tbody>
                        {sortTasks(tasks).map((item) => (
                            <tr onClick={() => editReminder(item)} key={item["id"]}>
                                <td>{item["Name"]}</td>
                                <td>{item["Description"]}</td>
                                <td>{item["Priority"]}</td>
                                <td>{item["Date"]}</td>
                            </tr>
                        ))}

                        <tr>
                            <td onClick={() => createNewReminder()}>+ Add a new reminder</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                   
                    </tbody>
                </table>

                    

                </div>

            </div>
        </div>
    )
}

export default TaskView;