import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const Advertise = () => {

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
                            style={{ backgroundImage: "url('https://img.freepik.com/free-psd/car-rental-automotive-facebook-cover-template_106176-2481.jpg?w=1060&t=st=1697784432~exp=1697785032~hmac=df1b76f620f40ce8ca1a91c823ecbd1b83e80f65d1bd4ad258a184665392d17a')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                            className='w-full h-screen'>

                            <div style={{ backgroundColor: "rgba(0,0,0,0.1)" }} className='w-full h-full '>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div
                            style={{ backgroundImage: "url('https://img.freepik.com/free-psd/black-friday-car-automotive-super-sale-facebook-cover-template_106176-1560.jpg?w=1060&t=st=1697784202~exp=1697784802~hmac=e6bbab90550630393ce5e5ade044c76676743d30608809fd63e6d682b9933316')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                            className='w-full h-screen'>
                            <div style={{ backgroundColor: "rgba(0,0,0,0.1)" }} className='w-full h-full '>
                            </div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div
                            style={{ backgroundImage: "url('https://img.freepik.com/free-psd/car-rental-automotive-facebook-cover-template_106176-2469.jpg?t=st=1697784090~exp=1697784690~hmac=d688514d4f2c43831df9c5e0494753b802398f2be27f2bffdf1c9345319d639b')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                            className='w-full h-screen'>

                            <div style={{ backgroundColor: "rgba(0,0,0,0.1)" }} className='w-full h-full '>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Advertise;