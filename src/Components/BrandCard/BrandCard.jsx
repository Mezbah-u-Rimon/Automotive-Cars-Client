import { useEffect, useState } from "react";
import Brand from "./Brand";


const BrandCard = () => {
    const [brands, setBrands] = useState();

    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div className="mx-auto max-w-6xl my-24 text-center px-5 lg:px-0">
            <h5 className="font-bold">Check out our recent cars
            </h5>
            <h1 className="text-3xl md:text-5xl font-bold mb-10"> FEATURE <span className="text-red-600">CAR </span> </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    brands?.map(brand => <Brand
                        key={brand.id}
                        brand={brand}>
                    </Brand>)
                }
            </div>
        </div>
    );
};

export default BrandCard;