import Navbar from "./component/Navbar/Navbar";
import {Routes,Route} from "react-router-dom"
import Register from "./component/Register/Register";
import Verify from "./component/Verify/Verify";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Sibercafe from "./Pages/Services/Sibercafe";
import MobileRepair from "./Pages/Services/MobileRepair";
import Profile from "./Pages/Profile/Profile";
import Contact from "./Pages/Contact/Contact";
function App() {
  return (
 <div>
 <Navbar/>
 <Routes>
  <Route path="/register" element={<Register/>}/>
  <Route path="/verify/:id/:user_id" element={<Verify/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/sibercafe" element={<Sibercafe/>}/>
  <Route path="/mobilerepair" element={<MobileRepair/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/contact" element={<Contact/>}/>
 
 </Routes>
 </div>
  );
}

export default App;
