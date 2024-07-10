import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatusTab } from "../stores/cart";
const Header = () => {
  const [totalquantity,settotalquantity] = useState();
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    carts.map(item => total += item.quantity);
    settotalquantity(total)
  },[carts]);
  const handleOpenTabCart = () =>{
    dispatch(toggleStatusTab())
  }
  return (
    <header className="flex justify-between items-center">
      <Link to="/" className="text-xl font-semibold">
        Home
      </Link>
      <div className="w-11 h-10 bg-gray-100 rounded-full flex justify-center" onClick={handleOpenTabCart}>
        <img src={iconCart} alt="" className="w-11 h-10 rounded-full" />
        <span className="absolute mt-5 ml-7 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center ">
          {totalquantity}
        </span>
      </div>
    </header>
  );
};
export default Header;
