import {  Route, Link, Routes } from "react-router-dom";
import Landing from "./landing";
import App from "./app";

const Routing = () => {
  return ( 
    <Routes>
      <Route path="/home" element={<Landing />}/>
      <Route path="/app" element={<App />}/>
    </Routes>
  );
}
 
export default Routing;