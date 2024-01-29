
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";


import items from '../../../public/testiminals.json'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="arrow arrow-next" onClick={onClick}>
            <GoArrowLeft />
        </div>

    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="arrow arrow-prev" onClick={onClick}>
            <GoArrowRight />
        </div>
    );
}

const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToScroll: 1
    };
    return (
        <div className='lg:px-28 md:px-20 sm:px-12 px-10 py-8' id='testimonials'>
            <div>
                <p className="text-[#08d665] font-medium uppercase py-2 u">testimonials</p>
                <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-extrabold uppercase text-[#ffffff]">happy clients to <span className="text-[#08d665]">say</span></h2>
            </div>

            <div className='py-8'>
                <Slider {...settings}>
                    {
                        items.map((item, index) => <div key={index}>
                            <div className="lg:flex lg:items-center lg:justify-center gap-8 lg;px-20 md:px-20 sm:px-12 px-8 py-10 border border-[#08d665]">

                                <div className="lg:w-1/6 flex items-center justify-center" >
                                    <img className="rounded-full" src={item.authpr} alt="" />
                                </div>

                                <div className="w-full text-center lg:text-start flex items-center justify-center flex-col lg:block">
                                    <img className="lg:py-0 py-2 lg:mt-0 mt-3" src={item.icon} alt="" />
                                    <div>
                                        <p className="text-[#fff] lg:text-2xl md:text-2xl sm:text-xl text-lg font-medium py-4">{item.feedback}</p>
                                        <h2 className="text-lg font-medium text-[#fff]">{item.name}</h2>
                                    </div>
                                </div>

                                <div>

                                </div>
                            </div>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;