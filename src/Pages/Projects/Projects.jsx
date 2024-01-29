import './Projects.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";


import items from '../../../public/services.json'

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

const Projects = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='lg:px-28 md:px-20 sm:px-12 px-10 py-8' id='portfolio'>
            <div>
                <p className="text-[#08d665] font-medium uppercase py-2 u">working process</p>
                <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-extrabold uppercase text-[#ffffff]">latest working <span className="text-[#08d665]">projects</span></h2>
            </div>

            <div className='py-8'>
                <Slider {...settings}>
                    {
                        items.map((item, index) => <div key={index}>
                            <div className='overlayer px-2'>
                                <img src={item.img} alt="" />
                                <h2 className='view_project text-xl font-medium text-[#fff] cursor-pointer'>VIEW PROJECT</h2>
                            </div>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Projects;