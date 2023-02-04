import  inputSore  from "@/utils/store/inputStore";
import tasksStore from "@/utils/store/tasksStore"
import postNote from "@/utils/services/postNote"
import reviewNote from "@/utils/helpers/reviewNote"

const Form = () => {
  
  const {tasks, setTasks} = tasksStore()

  const { title, content, important, setInput } = inputSore() 
  
  function handleSubmit(e){
    e.preventDefault()
    const newNote = { title, content, important}
    if(reviewNote(newNote)){
      const count = tasks.find(a=> a.title === title)
      if(!count){
        
        postNote(newNote).then(()=> setTasks([...tasks, newNote ]))
      }
    }
    
  }

  function handleInput(e){
    setInput(
      e.target.name,
      e.target.value
    )
  }
  function handleCheck(e){
    setInput(
      e.target.name,
      e.target.checked
    )
  }
 
  return ( 
    <form className="form" onSubmit={handleSubmit}>
      <input onChange={handleInput} type="text" name="title" placeholder="Title" />
      <input onChange={handleInput} type="text" name="content" placeholder="Content" />
      <div>
      <label >Is important</label>
      <input 
        onChange={handleCheck} 
        type="checkbox" name="important" placeholder="Is important"
      />
      </div>
      <button>Create</button>

    </form>
   );
}
 
export default Form;