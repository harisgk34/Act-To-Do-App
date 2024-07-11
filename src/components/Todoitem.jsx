function Todoitem(props) {


  

    function handleDelete(deleteid) {

        const activityArr = props.activityArr
        const setActivityArr = props.setActivityArr

       var temparr = activityArr.filter(function (item) {


        if (deleteid===item.id) 
        {

        return false

        
            
        }else{
            return true
        }
        
       })
       setActivityArr(temparr)
    }

    


    return(

        <div className="flex justify-between top-4 ">
<p className="">{props.index+1} {props.activity}</p>
<button onClick={()=>handleDelete(props.id)} className="bg-red-400 m-2 border rounded p-1">Delete</button>





</div>
    )
    


}

export default Todoitem;