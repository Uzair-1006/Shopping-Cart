import React, { useEffect, useState } from "react";
import {products} from '../pages/products';
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/cart";
const CartItem = ({data}) =>{
    const {productId,quantity} = data;
    const [detail,setdetail] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
            const findDetail = products.filter(product => product.id === productId)[0];
            setdetail(findDetail)
    },[productId])
    const handleMinusquantity = () =>{
            dispatch(changeQuantity({
              productId: productId,
              quantity: quantity - 1
            }));
        };
    const handlePlusquantity = () =>{
        dispatch(changeQuantity({
            productId:productId,
            quantity:quantity+1
        }))}
        if (!detail) {
            return <div>Loading...</div>;
          }
    return(
        <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
            <img src={detail.image} alt="" className="w-12"/>
            <h3>
                {detail.name}
            </h3>
            <p>
                ${detail.price * quantity}
            </p>
            <div className="w-20 flex justify-between">
                    <button className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600" onClick={handleMinusquantity}>-</button>
                    <span>{quantity}</span>
                    <button className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600" onClick={handlePlusquantity}>+</button>
            </div>
        </div>
    )
}
export default CartItem;
