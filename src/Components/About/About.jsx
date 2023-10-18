

const About = () => {
    return (
        <div className="max-w-6xl mx-auto my-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-5xl font-bold"> <span className="text-red-600"> About</span> Us </h1>
                <p className="text-gray-500 w-full md:w-10/12 lg:w-1/2 mx-auto ">
                    At Automotive Company, we are passionate about all things automotive. Our journey began with a shared love for cars and a commitment to offering our customers the very best in the world of automobiles.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                <div className="col-span-1">
                    <h1 className="text-3xl font-bold mb-10"> WELCOME TO THE AUTOMOTIVE CAR </h1>
                    <div className="mb-6">
                        <h5 className="text-xl font-bold text-red-600 mb-3"> Our Mission </h5>
                        <p>
                            Our mission is simple: to provide you with top-quality vehicles, outstanding service, and a seamless car-buying experience. We believe that owning a car should be more than just transportation; it should be an expression of your individuality and a source of joy and adventure.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h5 className="text-xl font-bold text-red-600 mb-3"> Exceptional Selection: </h5>
                        <p>
                            We curate a diverse range of vehicles, from sleek and efficient compact cars to rugged and capable SUVs. Whatever your lifestyle and preferences, we have a car that suits you.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h5 className="text-xl font-bold text-red-600 mb-3"> Quality Assurance:</h5>
                        <p>
                            Every vehicle in our inventory undergoes rigorous inspections to ensure it meets the highest standards of quality, safety, and reliability. We stand behind our cars with confidence.
                        </p>
                    </div>
                </div>
                <div className="col-span-2">
                    <img src="https://i.pinimg.com/564x/4d/65/7c/4d657c00e3d0063a76988c78a3ca84dd.jpg" alt="" />
                </div>
                <div className="col-span-1">

                </div>
            </div>
        </div>
    );
};

export default About;