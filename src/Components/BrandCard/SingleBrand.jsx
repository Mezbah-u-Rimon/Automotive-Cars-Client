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

    console.log(allCarsData);

    return (
        <div>
            <Advertise></Advertise>
            <div className="max-w-6xl mx-auto my-24">
                <h1 className="text-4xl font-bold mb-10 text-center"> Meet Our <span className="text-red-600">Brand New</span> Modals </h1>
                <div className="grid lg:grid-cols-2 p-5 md:p-10 gap-7">
                    {
                        brands?.map(brand => <SingleBrandCards
                            key={brand._id}
                            brand={brand}
                        > </SingleBrandCards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleBrand;