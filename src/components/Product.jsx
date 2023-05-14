import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../redux/Slices/cartSlice";

const Product = ({post}) => {
  const {cart}=useSelector((state)=>state);

  const dispatch=useDispatch();

  const addToCart=()=>{
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const removeFromCart=()=>{
    dispatch(remove(post.id));
    toast.success("Item removed from cart");
    
  }

  return (
  <div className="flex flex-col  justify-between px-5 py-5 w-[18%] cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-auto hover:scale-110 rounded-xl duration-200 ease-in">
    <div className="flex flex-col gap-2">
    <p className="line-clamp-1 font-bold">{post.title}</p>
    <p className="line-clamp-2">{post.description}</p>
    </div>
    <img src={`${post.image}`} alt={`${post.title}`} className="w-48"/>
    <div className="flex justify-between mt-2">
      <p className="text-green-500 font-bold">${post.price}</p>
        {
          cart.some((p)=> p.id===post.id)?
          <button
          onClick={removeFromCart} 
          className="bg-gray-700 text-white  duration-150 hover:scale-105  border-gray-700 border-2 rounded-full px-2"
          >Remove Item</button>
          :<button
          onClick={addToCart}
          
          className="hover:bg-gray-700 hover:text-white duration-150 hover:scale-105 text-gray-700 border-gray-700 border-2 rounded-full px-2"
          >Add To Cart</button>
        }
      
    </div>
  </div>);
};

export default Product;
