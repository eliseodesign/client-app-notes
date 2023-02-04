// import getNotes from "@/utils/services/getNotes"
import tasksStore from "@/utils/store/tasksStore"
import deleteNote from "@/utils/services/deleteNote"

const Note = ({title, content, important, id}) => {

  const {tasks, setTasks} = tasksStore()

  function handleDelete (id){
    deleteNote({id}).then(()=> setTasks(
      tasks.filter((el)=>{
        return(
          el.id !== id
        )
      })
    ))
    
    

  }
  return ( 
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <button>{important?"Important":"no important"}</button>
      <button onClick={()=> handleDelete(id)}>delete</button>
    </div>
   );
}
 
export default Note;