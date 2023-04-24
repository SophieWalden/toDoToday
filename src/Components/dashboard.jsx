import React from 'react';
import "./dashboard.css"

function Dashboard(props){
    const [sortFunction, setSortFunction] = React.useState("Date");

    let initTasks = [];
    const [tasks, setTasks] = React.useState(initTasks);

    function sortTasks(tasks){
        // Takes a list of objects and sorts them based on an attribute sortFunction which can be controlled by the user
        return tasks.sort((p1, p2) => typeof p1[sortFunction] == "string" ? p1[sortFunction].localeCompare(p2[sortFunction]) : p1[sortFunction] - p2[sortFunction]);
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

    React.useEffect(() => {
        getTasks();
    }, []);

    return (
        <div id="DashboardTab">
            <div id="DashboardContainer">
                <div id="DashboardWelcomeText">Welcome back!</div>
                
                <div id="DashboardMiddleContent">
                    <div id="DashboardMinyTaskView">
                        <h4>Tasks</h4>
                        

                        <div id="DashboardMinyTaskViewWithoutTitle">
                       
                            <div id="DashboardMinyTaskViewSortOptions">
                             <p>Sort by:</p> 
                             <button onClick={() => setSortFunction("Date")}>Date</button>
                            <button onClick={() => setSortFunction("Name")}>Name</button>
                            <button onClick={() => setSortFunction("Priority")}>Priority</button>
                            </div>
                                
                                
                            <div id="dashboardMinyTaskViewTableContainer">
                                <table id='dashboardContainerTable'>
                                    <tbody>
                                        {sortTasks(tasks).map((item) => (
                                            <tr key={item["id"]}>
                                                <td>{item["Name"]}</td>
                                                <td>{item["Description"]}</td>
                                                <td>{item["Priority"]}</td>
                                                <td>{item["Date"]}</td>
                                            </tr>
                                        ))}

            
                                
                                    </tbody>
                                </table>
                            </div>

                            

                            <div id="DashboardMinyTaskViewTable"></div>
                        </div>
                    </div>

                    <div id="DashboardMinyCalendar">
                        <div id="DashboardMinyCalendarTitle"><h4>April</h4></div>
                        <div id="DashboardMinyCalendarContent">


                            <table id="DashboardMinyCalendarTable">
                                <thead>
                                    <tr>
                                        <th>Sun</th>
                                        <th>Mon</th>
                                        <th>Tue</th>
                                        <th>Wed</th>
                                        <th>Thu</th>
                                        <th>Fri</th>
                                        <th>Sat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(4).keys()].map((day) => (
                                        <tr key={day}>
                                            <td>{day*7+1}</td>
                                            <td>{day*7+2}</td>
                                            <td>{day*7+3}</td>
                                            <td>{day*7+4}</td>
                                            <td>{day*7+5}</td>
                                            <td>{day*7+6}</td>
                                            <td>{day*7+7}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div id="DashboardBottomContent">
                    <div id="DashboardRecentlySharedWith">
                        <h4>Recently shared with..</h4>
                        
                        <h5>You currently have no contacts</h5>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Dashboard;