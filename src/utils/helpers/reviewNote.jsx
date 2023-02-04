import tasksStore from "@/utils/store/tasksStore"

function reviwNote({title, content, important}){

  if(typeof title !== "string" || title.length === 0) return false 
  if(typeof content !== "string") return false 
  if(typeof important !== "boolean") return false 

  return true
}

export default reviwNote