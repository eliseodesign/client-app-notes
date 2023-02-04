import axios from "axios"

const postNote = async ({title, content, important})=>{

  await axios.post("http://localhost:3020/api/notes", {
    title,
    content,
    important
  })
  .then((res)=>{
   
   return res.data
  })
  .catch((e)=>{
    console.log(e)
  })

  

}

export default postNote