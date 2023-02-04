import { useEffect } from "react";
import Note from "./Note";
import getNotes from "@/utils/services/getNotes"
import tasksStore from "@/utils/store/tasksStore"
const List = () => {

  const {tasks, setTasks} = tasksStore()
  
  useEffect(() => {

    getNotes().then((notes)=>{
      setTasks(notes)
    })
  }, [])
  

  return (
    <div className="list-notes">
        {tasks.map((note)=>(
          <Note 
            key={note.title}
            id={note.id}
            title={note.title}
            content={note.content}
            important={note.important}
          />
        ))
        }
      </div>
    );
}
 
export default List;