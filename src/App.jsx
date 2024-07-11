import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";




function App(props) {

  return(

<>
{/* Header */}
    <div className= "p-16 bg-black">
    <div className="bg-[#EFEFEF] p-10 border rounded-md" >
     <Header/>

{/* Card */}

     <div className=" flex justify-between gap-7 my-5 flex-wrap ">
     <Card bgcolor= {"#8272DA"} title={"23"} subtitle={"Chennai"}/>
     <Card bgcolor= {"#FD6663"} title={"December"} subtitle={"14:03:34"}/>
     <Card bgcolor= {"#FCA201"} title={"Build Using "} subtitle={"React"}/>
   
     </div>
{/* TodoContainer */}

     <TodoContainer/>
  
 
   

     </div>
    </div>

     </>


  )
}
export default App;