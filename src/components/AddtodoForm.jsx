import { useState } from "react";


function AddtodoForm(props) {

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

   const[newActivity,setNewactivity]=useState("")


function handleChange(evt) {

    setNewactivity(evt.target.value)


    
}

function addActivity() {


setActivityArr([...activityArr,{id:activityArr.length+1,activity:newActivity}])

setNewactivity([""])
    
}

    return(
        <div className="flex flex-col gap-3">

        <h1 className="text-2xl font-medium">Manage Actiity</h1>
    
        <div>
        <input value={newActivity} onChange={handleChange} type="text" className ="border rounded-md border-black p-2 bg-transparent" placeholder="   Next Activity..." />
        <button onClick={addActivity} className="bg-black text-white p-2 border border-black rounded-md ">Add</button>
        </div>
        </div>
    )
    
}


export default AddtodoForm;