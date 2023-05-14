import { AiFillDelete} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.success("Item removed from cart");
  }

  return <div className="flex   justify-between border-t-2 border-b-2">
    
    <div className="flex max-w-[25%]">
      <img src={item.image} alt={item.title}/>
    </div>

    <div className="flex flex-col w-[60%] justify-evenly">
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
        <div className="flex justify-between items-center">
          <p className="font-bold">${item.price}</p>
          <div onClick={removeFromCart} className="bg-pink-200 cursor-pointer rounded-full p-2">
            <AiFillDelete className="text-red-600 text-xl"/>
          </div>
        </div>
    </div>
  </div>;
};

export default CartItem;
