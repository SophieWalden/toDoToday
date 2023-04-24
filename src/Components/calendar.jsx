import React from 'react';
import "./calendar.css"





function Calendar(){
    const Click=() => {
        console.log('')
    
}  
  

    



    return (
        <div id="CalendarTab">
            <div id="CalendarContainer">
                <div id="taskContainerNavBarTitle">
                    <div id="CalendarTitle">
                    
                </div>

                <div id="taskContainerSortFunctions">
                <div id="CalContainerSortButtons">
                <select name="CalContainerSortButtons" id="cal">
                    
                        <option value="Month">Month</option>
                        <option value="Week">Week</option>
                        
                        
                    
                    </select>
            
                </div>

                
               <div id="CalTable"></div>
                        </div>
                    </div>

                    <div id="MonthCalendar">
                        <div id="caltitle"><h4>April</h4></div>
                        <div id="monthContent">
                            


                            <table id="MonthCalendarTable">
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
                                        <tr>
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




                </div>
                
                
        

        

           
    )
}

export default Calendar;
