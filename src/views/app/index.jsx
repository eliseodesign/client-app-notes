import { useEffect } from "react";
import Note from "./components/Note";
import Form from "./components/Form";
import List from "./components/List";
const App = () => {

  return ( 
    <div className="app">
      <Form />
      <List />
    </div> 
    );
}
 
export default App;