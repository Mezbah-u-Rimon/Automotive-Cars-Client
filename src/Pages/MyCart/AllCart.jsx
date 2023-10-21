import PropTypes from 'prop-types';
import { AiOutlineDelete, AiTwotoneStar } from 'react-icons/ai';
import Swal from 'sweetalert2';

const AllCart = ({ allCart, myAllCarts, setMyAllCarts }) => {

    const { _id, name, brand_name, price, rating, photo } = allCart || {};


    const handleDelete = (id) => {
        // console.log(_id);
        // console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`https://automotive-car-server.vercel.app/myCart/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your selected Car has been deleted.',
                                'success'
                            )
                            const remaining = myAllCarts?.filter(cart => cart._id !== id);
                            setMyAllCarts(remaining)
                        }
                    })
            }
        })
    }

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
                <button onClick={() => handleDelete(_id)} className='text-base flex items-center gap-2 px-6 py-3 rounded-lg border-red-500 border text-red-500 shadow-lg hover:shadow-pink-300'> <AiOutlineDelete className='text-2xl'></AiOutlineDelete> Remove Cart</button>
            </div>
        </div>
    );
};

AllCart.propTypes = {
    allCart: PropTypes.object.isRequired,
    myAllCarts: PropTypes.array.isRequired,
    setMyAllCarts: PropTypes.func.isRequired,
}

export default AllCart;