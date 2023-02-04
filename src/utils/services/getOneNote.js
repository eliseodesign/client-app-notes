import axios from "axios"

const getOneNote = async (id)=>{
  let {data} = await  axios(`http://localhost:3020/api/notes/${id}`)

  return data
}

export default getOneNote