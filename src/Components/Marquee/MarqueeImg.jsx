import Marquee from "react-fast-marquee";

const MarqueeImg = () => {
    return (
        <div className="my-16">
            <Marquee pauseOnHover={true} speed={50}>
                <div className="h-[150px]">
                    <img className="my-5 mx-5 h-full" src="https://logowik.com/content/uploads/images/904_mercedesbenz.jpg" alt="" />
                </div>
                <div className="h-[150px]">
                    <img className="my-5 mx-5 h-full" src="https://robbreport.com/wp-content/uploads/2020/05/12.jpg" alt="" />
                </div>
                <div className="h-[150px]">
                    <img className="my-5 mx-5 h-full" src="https://static.vecteezy.com/system/resources/previews/020/502/451/non_2x/ferrari-logo-brand-car-symbol-with-name-design-italian-automobile-illustration-free-vector.jpg" alt="" />
                </div>
                <div className="h-[150px]">
                    <img className="my-5 mx-5 h-full" src="https://s.yimg.com/ny/api/res/1.2/3hsG0QstTUm3r24GeO2hHA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/creative_bloq_161/280b318b1860d051e8a9b3d903511e08" alt="" />
                </div>
                <div className="h-[150px]">
                    <img className="my-5 mx-5 h-full" src="https://www.carlogos.org/logo/Rolls-Royce-logo-2048x2048.png" alt="" />
                </div>
                <div className="h-[150px]">
                    <img className="my-5 mx-5 h-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/600px-BMW.svg.png" alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default MarqueeImg;