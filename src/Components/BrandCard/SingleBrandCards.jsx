import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const SingleBrandCards = ({ brand }) => {
    const { _id, name, brand_name, price, rating, details, photo } = brand;


    return (
        <div className=''>
            <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 overflow-hidden text-gray-700 bg-white shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={photo}
                        alt="image"
                        className="object-cover w-full h-[400px]"
                    />
                </div>
                <div className="p-6">
                    <div className='flex justify-between items-center mb-4'>
                        <h6 className=" text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                            {brand_name}
                        </h6>
                        <div className='flex gap-2 '>
                            <h6 className=" text-xl antialiased font-semibold leading-relaxed tracking-normal text-pink-500">
                                {rating}
                            </h6>
                            <form className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" checked />
                            </form>

                        </div>

                    </div>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {name}
                    </h4>
                    <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        <span className='text-pink-500'>Price</span> : $ {price}
                    </h4>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        {details.slice(0, 100)}
                    </p>
                    <div className='flex flex-wrap gap-4'>
                        <Link to="/carDetails">
                            <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                More Details
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    ></path>
                                </svg>
                            </button>
                        </Link>
                        <Link to={`/update/${_id}`}>
                            <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Update Car
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    ></path>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleBrandCards.propTypes = {
    brand: PropTypes.object.isRequired
}

export default SingleBrandCards;