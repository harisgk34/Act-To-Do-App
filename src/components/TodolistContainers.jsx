
import Todoitem from "../components/Todoitem";




function TodolistContainers(props) {

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    

    return (
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium mb-4">Today's Activities</h1>
           
             
              {activityArr.length===0? <p>         You haven't added anythig yet...</p> :""}
{

    activityArr.map(function(item,index){

                   return <Todoitem id={item.id} activityArr={activityArr} setActivityArr={setActivityArr} activity={item.activity} index={index} />
                })

}
           
        </div>
    );
}

export default TodolistContainers;



