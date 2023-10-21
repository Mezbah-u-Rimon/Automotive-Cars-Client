import PropTypes from 'prop-types';
import { AiOutlineDelete, AiTwotoneStar } from 'react-icons/ai';

const AllCart = ({ allCart }) => {

    const { _id, name, brand_name, price, rating, photo } = allCart || {};

    return (
        <div className='flex flex-col justify-center md:flex-row md:justify-between border-y py-8 gap-4'>
            <div className='h-[150px] md:w-[300px] w-full'>
                <img className='h-full w-full rounded-lg' src={photo} alt="" />
            </div>
            <div className='w-full md:w-2/4'>
                <h2 className="text-xl font-bold pb-4 inline-block">{name}
                </h2>
                <p className='text-gray-500 pb-2'> Brand : {brand_name}  </p>
                <p className='text-gray-500 pb-2'> Price : $ {price}  </p>
                <div className='flex gap-2'>
                    <p className="text-gray-500 pb-2">
                        Rating : <span className='text-2xl font-medium text-amber-500'> {rating} </span>
                    </p>
                    <AiTwotoneStar className="text-3xl pt-1 text-amber-400"></AiTwotoneStar>
                </div>
            </div>
            <div className='md:w-[200px] w-full my-auto text-center'>
                <button className='text-base flex items-center gap-2 px-6 py-3 rounded-lg border-red-500 border text-red-500 shadow-lg hover:shadow-pink-300'> <AiOutlineDelete className='text-2xl'></AiOutlineDelete> Remove Cart</button>
            </div>
        </div>
    );
};

AllCart.propTypes = {
    allCart: PropTypes.object.isRequired
}

export default AllCart;