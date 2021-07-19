
import "./index.css"
import Topbar from './componenets/Topbar';
import  Sidebar from "./componenets/Sidebar";
import Home from './pages/Home';


function APP(){
   
    return (
      <>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>
      </>     
    )
  
}

export default APP

