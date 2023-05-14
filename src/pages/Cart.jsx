import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";


const Cart = () => {
  const {cart}=useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);


  useEffect(()=>{
    setTotalAmount( cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])

  return (
  <div className="mt-32">
    {
      cart.length>0?
      (<div className="flex mx-28 gap-10 relative">
        <div className="w-[70%]">
          {
            cart.map((item,index)=>{
              return <CartItem item={item} itemIndex={index} key={item.id}/>
            })
          }
        </div>

        <div className="flex flex-col w-[30%] justify-between h-[80vh]">
          <div className="flex flex-col">
            <p className="text-xl text-green-600">YOUR CART</p>
            <p className="text-3xl text-green-600">SUMMARY</p>
            <p>Total Items : {cart.length}</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xl">Total Amount : ${totalAmount}</p>
            <button className="bg-green-600 text-white text-xl duration-150 hover:bg-green-800 rounded-lg">CHECKOUT</button>
          </div>
        </div>
      </div>):
      (<div className="flex flex-col gap-3 justify-center items-center h-[90vh]">
        <h1 className="font-bold">Cart is Empty</h1>
        <Link to={"/"}>
        <button className="bg-green-500 px-4 py-2 text-white font-bold rounded-xl duration-200 ease-in hover:bg-green-800">Shop Now</button>
        </Link>
      </div>)
    }
  </div>);
};

export default Cart;
