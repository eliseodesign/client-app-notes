import axios from "axios"

const getNotes = async ()=>{
  let {data} = await  axios("http://localhost:3020/api/notes")

  return data
}

export default getNotes