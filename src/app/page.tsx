"use client"
import { useState } from "react";


export default function Home() {
const [todoItem, settodoItem] = useState([]);
const [todocompItem, settodocompItem] = useState([]);
const [inputField, setinputField] = useState("")


const addTodoitem =()=>{
  const newtodoItem:any = [...todoItem]
  newtodoItem.push(inputField)
  settodoItem(newtodoItem)
  setinputField("")

}
const removeTodoitems = (index:number)=>{
const removeitem =[...todoItem]
removeitem.splice(index,1)
settodoItem(removeitem)

}
const markAscompleted = (singleItem:string)=>{
  const newcompItem:any =[...todocompItem]
  newcompItem.push(singleItem)
  settodocompItem(newcompItem)

}


  return (
    

    <div className="min-h-screen bg-gray-600 flex items-center justify-center">
    <div className="max-w-md mx-auto p-10 bg-white rounded-md shadow-md">
    <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
    <div className="flex mb-4">
    <input
    className="border rounded-1 p-2 rounded w-full mb-2 outline-none focus:ring-2 focus:ring-blue-600"
      type="text"
      placeholder = "Enter todo items"
      value = {inputField}
      onChange={(e)=>{
       setinputField(e.target.value)

      }}
      
      />
    <button
      
      className="bg-blue-500 text-white p-2 rounded-r  hover:bg-purple-600 transition"
      onClick={addTodoitem}
    >

      Add Task
    </button>
    </div>
    <ul className="space-y-2">
      {todoItem.length > 0 ?
      todoItem.map(( singleItem,index)=>{
        const markComplete = todocompItem.includes(singleItem)


        return( 
        
        <li key={index}  className={ (markComplete? "bg-green-700 ":"bg-slate-600 ") + "flex justify-between items-center p-2  rounded"}>
          <span>{singleItem}</span>
          {markComplete?

            null
            :
          
          <>
          <button className="text-green-900 hover:text-purple-700 border-2  p-2" onClick={()=> markAscompleted(singleItem)}>complete</button>
          <button className="text-red-700 border-2 p-2"
            onClick={() => removeTodoitems(index)}
          > Remove
          </button>
          </>}
        </li>

        )
      })
      
      :
      <p>No task today</p>
    }

       </ul>
  </div>
  </div>
  
);
};

    