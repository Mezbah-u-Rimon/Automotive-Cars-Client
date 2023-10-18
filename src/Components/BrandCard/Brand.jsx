import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({ brand }) => {
    const { brand_name, brand_img } = brand || {};

    return (
        <Link to={`/singleBrand/${brand_name}`}>
            <div className="card bg-base-100 hover:shadow-red-200 shadow-xl">
                <figure className='p-4'><img src={brand_img} alt="brand" className='h-[250px] rounded-xl ' /></figure>
            </div>
        </Link>
    );
};

Brand.propTypes = {
    brand: PropTypes.object.isRequired
}

export default Brand;