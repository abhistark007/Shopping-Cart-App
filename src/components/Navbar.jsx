
import IMG from '../assets/l1.jpg'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  
  const {cart}=useSelector((state)=>state);

  return (
  <div className="flex justify-between items-center bg-black px-10 py-3 fixed top-0 left-0 right-0 z-10">
      <NavLink to={"/"}>
      <img src={IMG} width={50} alt='SSS'/>
      </NavLink>
      <div className='flex gap-5'>
        <NavLink to={"/"}>
        <p className='cursor-pointer duration-150 hover:font-bold text-white'>Home</p>
        </NavLink>
        <NavLink to={"/cart"}>
        <div  className='cursor-pointer relative'>
          <div className='animate-bounce absolute -top-3 -right-1 text-white bg-green-600 rounded-full w-6 flex justify-center'>{cart.length}</div>
        <FaShoppingCart color='white' size={30}/>
        </div>
        </NavLink>

      </div> 
  </div>
  )
};

export default Navbar;
