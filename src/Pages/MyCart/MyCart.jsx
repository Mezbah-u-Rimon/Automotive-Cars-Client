import { useLoaderData } from "react-router-dom";
import AllCart from "./AllCart";
import { useState } from "react";


const MyCart = () => {
    const myCart = useLoaderData();
    const [myAllCarts, setMyAllCarts] = useState(myCart);

    return (
        <div className="max-w-6xl mx-auto pt-12 pb-24 px-5">
            <div className="mb-12 ">
                <h2 className="text-4xl font-bold text-center"> My <span className="text-red-600"> Cart</span> </h2>
            </div>
            <div>
                {
                    myAllCarts?.map(allCart => <AllCart
                        key={allCart._id}
                        allCart={allCart}
                        myAllCarts={myAllCarts}
                        setMyAllCarts={setMyAllCarts}
                    > </AllCart>)
                }
            </div>
        </div>
    );
};

export default MyCart;