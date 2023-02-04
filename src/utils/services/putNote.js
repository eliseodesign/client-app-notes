import axios from "axios"

const putNote = async (id,obj)=>{
  console.log(obj)
  await axios.put(`http://localhost:3020/api/notes/${id}`, {
    ...obj
  })
  .then((res)=>{
   console.log(res)
  })
  .catch((e)=>{
    console.log(e)
  })

  

}

export default putNote