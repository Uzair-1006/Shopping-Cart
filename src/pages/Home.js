import React from "react";
import { products } from "./products";
import ProductCart from "../components/ProductCart";
const Home = () =>{
    return(
        <div>
            <h1 className="text-3xl my-5">List products</h1>
            <div className="grid lg:grid-cols-4 md-grids-cols-3 sm:grid-cols-2 gap-5">
                {products.map((product,key) =>{
                    return (<ProductCart key={key} data={product}/>
                    )
                })}
            </div>
        </div>
    )
}
export default Home;