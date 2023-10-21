import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleBrandCards from "./SingleBrandCards";
import Advertise from "./Advertise";


const SingleBrand = () => {
    const allCarsData = useLoaderData(null);
    const { brand_name } = useParams();
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const filterBrand = allCarsData?.filter(brand => brand.brand_name === brand_name);
        setBrands(filterBrand);

    }, [allCarsData, brand_name])

    console.log(brands);

    return (
        <div>
            <Advertise></Advertise>
            {
                brands.length > 0 ? <div className="max-w-6xl mx-auto my-24">
                    <h1 className="text-4xl font-bold mb-10 text-center"> Meet Our <span className="text-red-600">{brand_name} Brand New</span> Modals </h1>
                    <div className="grid lg:grid-cols-2 p-5 md:p-10 gap-7">
                        {
                            brands?.map(brand => <SingleBrandCards
                                key={brand._id}
                                brand={brand}
                            > </SingleBrandCards>)
                        }
                    </div>
                </div> : <div className="py-24 mx-auto lg:w-1/3">
                    <h3 className="text-xl font-bold text-red-500 text-center"> There is no data here. Please go to Add Product and Add new data ...</h3>

                </div>
            }

        </div>
    );
};

export default SingleBrand;