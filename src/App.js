import ScrollToTop from "./component/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Receipt from "./pages/Receipt";
import RoomDetail from "./pages/RoomDetail";
import Rooms from "./pages/Rooms";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter >
      <Routes>
      
         <Route path='/'  element ={<Home/> }/>
         <Route path='/rooms'  element ={<Rooms/> }/>
         <Route path='/about' element = {<About/>} />
         <Route path='/contact' element = {<Contact/>} />
         <Route path='/explore' element = {<Explore/>} />
         <Route path='rooms/rooms/:userId' element = {<RoomDetail/>} />
         <Route path='/payment' element = {<Payment/>} />
         <Route path='/receipt' element = {<Receipt/>} />

         

       
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
