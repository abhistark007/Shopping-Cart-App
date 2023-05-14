import {  Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Navbar />
      
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/cart"} element={<Cart />} />
        </Routes>
        <Toaster/>
    </div>
  );
};

export default App;
