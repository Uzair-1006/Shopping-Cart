import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

const ProductCart = (props) =>{
    const carts = useSelector(store => store.cart.items)
    console.log(carts);
    const{id,name,price,image,slug}  = props.data
    const dispatch = useDispatch();
    const handleaddTocart = () =>{
        dispatch(addToCart({
            productId:id,
            quantity:1
        }))
    }
    return(
        <div className="bg-white p-5 rounded-xl shadow-sm">
            <Link to={slug}>
                <img src={image} alt='' className="w-full h-80 object-cover object-top drop-shadow-[0_0px_0px_#0007]"/> 
            </Link>
            <h3 className="text-2xl py-3 text-center font-medium">{name}</h3>
            <div className="flex justify-between items-center">
                <p>
                    <span className="text-xl font-medium">${price}</span>
                </p>
                <button className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-600 flex gap-2" onClick={handleaddTocart}>
                    <img src={logo} alt="" className="w-5"/>
                    Add To Cart
                </button>
            </div>
        </div>
    )
}
export default ProductCart;