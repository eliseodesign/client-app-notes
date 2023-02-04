import axios from "axios"

const deleteNote = async ({id})=>{
  console.log(id)
  await axios.delete(`http://localhost:3020/api/notes/${id}`)
  .then((res)=>{
    console.log(res)
  })
  .catch((e)=>{
    console.log(e)
  })


}

export default deleteNote