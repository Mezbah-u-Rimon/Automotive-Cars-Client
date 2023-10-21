import { useLoaderData } from "react-router-dom";
import AllCart from "./AllCart";


const MyCart = () => {
    const myCart = useLoaderData();
    console.log(myCart);

    return (
        <div className="max-w-6xl mx-auto pt-12 pb-24 px-5">
            <div className="mb-12 ">
                <h2 className="text-4xl font-bold text-center"> My <span className="text-red-600"> Cart</span> </h2>
            </div>
            <div>
                {
                    myCart?.map(allCart => <AllCart
                        key={allCart._id}
                        allCart={allCart}> </AllCart>)
                }
            </div>
        </div>
    );
};

export default MyCart;