import  TodolistContainers  from "../components/TodolistContainers";
import AddtodoForm from "../components/AddtodoForm";
import { useState } from "react";

function TodoContainer() {

    const[activityArr,setActivityArr] = useState(
        [
        {
            id: 1,
            activity: "Go for a walk"
        },
        {
            id: 2,
            activity: "Take a breakfast"
        },

        {
            id: 3,
            activity: "Take a sleep"
        },]
    );

return(
    





    <div>
    <div className="flex gap-5 flex-wrap">
    
    
       <AddtodoForm activityArr={activityArr} setActivityArr={setActivityArr} />
       <TodolistContainers activityArr={activityArr} setActivityArr={setActivityArr}/>
   
    </div>
    </div>

    
)
    
}


export default TodoContainer;