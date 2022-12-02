import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./Detail";
import Bandas from "./Bandas";
import NavBar from "./src/Navbar";

function App() {
 return (
   <div className="App">
     <NavBar></NavBar>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Bandas />} />
         <Route path="/bandas" element={<Bandas />} />
         <Route path="/bandas/:bandaId" element={<Detail />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;