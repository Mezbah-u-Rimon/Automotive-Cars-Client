import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const Banner = () => {
    return (
        <div className='text-white'>
            <div>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <div
                            style={{ backgroundImage: "url('https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                            className='w-full h-screen'>

                            <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className='w-full h-full flex flex-col gap-5 justify-center'>

                                <div className='px-10 md:px-20 lg:px-[130px] text-center'>
                                    <small className='text-xl font-bold'
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom">
                                        A Legacy of Luxury and Innovation </small>
                                    <h1 className='text-4xl md:text-7xl font-bold text-white pt-3 pb-7'
                                        data-aos="zoom-in-right">
                                        Mercedes-Benz
                                    </h1>
                                    <button
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"
                                        className='btn bg-[#ffb303] hover:bg-[#fab411c6]'> Bay the Courses Now</button>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            style={{ backgroundImage: "url('https://images.pexels.com/photos/2127041/pexels-photo-2127041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                            className='w-full h-screen'>

                            <div style={{ backgroundColor: "rgba(0,0,0,0.3)" }} className='w-full h-full flex flex-col gap-5 justify-center'>

                                <div className='px-10 md:px-20 lg:px-[130px]'>
                                    <small className='text-xl font-bold'
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                    > The Ultimate Driving Machine </small>
                                    <h1 data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine"
                                        className='text-4xl md:text-7xl font-bold text-white pt-3 pb-7'>
                                        BMW's Legacy
                                    </h1>
                                    <button
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"
                                        className='btn bg-[#ffb303] hover:bg-[#fab411c6]'
                                    > Bay the Courses Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            style={{ backgroundImage: "url('https://images.pexels.com/photos/6968984/pexels-photo-6968984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                            className='w-full h-screen'>

                            <div style={{ backgroundColor: "rgba(0,0,0,0.3)" }} className='w-full h-full flex flex-col gap-5 justify-center'>

                                <div className='px-10 md:px-20 lg:px-[130px]'>
                                    <small className='text-xl font-bold'
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                    >Where Performance Meets Passion </small>
                                    <h1 data-aos="zoom-in-right" className='text-4xl md:text-7xl font-bold text-white pt-3 pb-7'>
                                        Lamborghini
                                    </h1>
                                    <button className='btn bg-[#ffb303] hover:bg-[#fab411c6]'
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"
                                    > Bay the Courses Now</button>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            style={{ backgroundImage: "url('https://images.pexels.com/photos/13407329/pexels-photo-13407329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                            className='w-full h-screen'>

                            <div style={{ backgroundColor: "rgba(0,0,0,0.3)" }} className='w-full h-full flex flex-col gap-5 justify-center'>

                                <div className='px-10 md:px-20 lg:px-[130px] text-center'>
                                    <small className='text-xl font-bold'
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                    >  Maranello's Legacy of Speed and Passion </small>
                                    <h1 data-aos="zoom-in-right" className='text-4xl md:text-7xl font-bold text-white pt-3 pb-7'>
                                        Ferrari
                                    </h1>
                                    <button className='btn bg-[#f5220b] hover:bg-[#fab411c6]'
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"
                                    > Cars Details </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            style={{ backgroundImage: "url('https://images.pexels.com/photos/5046370/pexels-photo-5046370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                            className='w-full h-screen'>

                            <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className='w-full h-full flex flex-col gap-5 justify-center'>

                                <div className='px-10 md:px-20 lg:px-[130px] text-center'>
                                    <small className='text-xl font-bold'
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                    >  The Epitome of Automotive Luxury and Elegance </small>
                                    <h1 data-aos="zoom-in-right" className='text-4xl md:text-7xl font-bold text-white pt-3 pb-7'>
                                        Rolls Royce
                                    </h1>
                                    <button className='btn bg-[#fab411] hover:bg-[#fab411c6]'
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"
                                    > Cars Details </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            style={{ backgroundImage: "url('https://images.pexels.com/photos/14648100/pexels-photo-14648100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                            className='w-full h-screen'>

                            <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className='w-full h-full flex flex-col gap-5 justify-center'>

                                <div className='px-10 md:px-20 lg:px-[130px] text-center'>
                                    <small className='text-xl font-bold'
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                    >    Innovation in Sustainable Mobility Car in </small>
                                    <h1 data-aos="zoom-in-right" className='text-4xl md:text-7xl font-bold text-white pt-3 pb-7'>
                                        Tesla
                                    </h1>
                                    <button className='btn bg-[#fab411] hover:bg-[#fab411c6]'
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"
                                    > Cars Details </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Banner;