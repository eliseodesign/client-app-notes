// import getNotes from "@/utils/services/getNotes"
import tasksStore from "@/utils/store/tasksStore"
import deleteNote from "@/utils/services/deleteNote"
import putNote from "@/utils/services/putNote"

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

  function handleImportant(id){
    putNote(id, {important: !important}).then(()=>{

      setTasks(tasks.map( el => {

        if(el.id === id){
          return {
            ...el,
            important: !important
          }
        }
        return el
      }))
   

    }).cath((e)=> console.log(e))
    
  }
  return ( 
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={()=> handleImportant(id)}>{important?"Important":"no important"}</button>
      <button onClick={()=> handleDelete(id)}>delete</button>
    </div>
   );
}
 
export default Note;