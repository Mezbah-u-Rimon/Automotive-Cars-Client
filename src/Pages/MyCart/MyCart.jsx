import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const myCart = useLoaderData();
    console.log(myCart);
    return (
        <div>

        </div>
    );
};

export default MyCart;