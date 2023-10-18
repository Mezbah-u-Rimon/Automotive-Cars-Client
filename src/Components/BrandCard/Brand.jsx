import PropTypes from 'prop-types';

const Brand = ({ brand }) => {
    const { id, brand_name, brand_img } = brand || {};

    return (
        <div className=''>
            <div className="card bg-base-100 hover:shadow-red-200 shadow-xl">
                <figure className='p-4'><img src={brand_img} alt="brand" className='h-[250px] rounded-xl ' /></figure>

            </div>
        </div>
    );
};

Brand.propTypes = {
    brand: PropTypes.object.isRequired
}

export default Brand;