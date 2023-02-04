import create from "zustand"


const useInput = create(set=>({
    title:"",
    content:"",
    important:false,
    setInput:(name,value)=> set({[name]: value})
  }
))

export default useInput