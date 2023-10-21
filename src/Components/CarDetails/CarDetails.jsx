import { AiTwotoneStar } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const CarDetails = () => {
    const carDetails = useLoaderData()

    const { _id, name, brand_name, price, category, rating, details, photo } = carDetails || {};

    const cart = { _id, name, brand_name, price, category, rating, details, photo }

    const handleAddToCart = () => {
        fetch("https://automotive-car-server.vercel.app/myCart", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cart),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car added my cart successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }


    return (
        <div className="w-full max-w-6xl mx-auto mb-24 md:mt-16 mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="relative lg:m-0 overflow-hidden text-gray-700 bg-white shrink-0 rounded-xl bg-clip-border m-4">
                    <img
                        src={photo}
                        alt="image"
                        className="object-cover w-full"
                    />
                </div>
                <div className="relative   rounded-xl bg-white bg-clip-border text-gray-700 shadow-md lg:ml-20">
                    <div className="p-6">
                        <div className='flex justify-between items-center mb-4'>
                            <h6 className=" text-base antialiased font-semibold leading-relaxed tracking-normal text-red-600 uppercase">
                                {brand_name}
                            </h6>
                            <div className='flex gap-2 '>
                                <h6 className=" text-2xl font-semibold text-amber-500">
                                    {rating}
                                </h6>
                                <AiTwotoneStar className="text-3xl text-amber-400"></AiTwotoneStar>
                            </div>

                        </div>
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {name}
                        </h4>
                        <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            <span className='text-red-600'>Price</span> : $ {price}
                        </h4>
                        <p className="block mb-8 mt-5 text-base  font-normal text-gray-700">
                            <span className="text-lg font-semibold"> Short Description : </span>
                            {details.slice(0, 200)}
                        </p>

                        <button onClick={() => handleAddToCart(_id)} className="px-6 py-3 text-base text-center bg-red-600 btn hover:text-black text-white">
                            <BsCart4 className="text-2xl"></BsCart4> Add To Cart
                        </button>

                    </div>
                </div>
            </div>
            <div className="my-16">
                <p className="block text-base  font-normal text-gray-700">
                    <span className="text-lg font-semibold"> Long Description : </span>
                    {details}
                </p>
            </div>
        </div>
    );
};

export default CarDetails;