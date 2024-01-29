
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";




import items from '../../../public/blogs.json'

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

const Blogs = () => {
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
        <div className='lg:px-28 md:px-20 sm:px-12 px-10 py-8' id='blogs'>
            <div>
                <p className="text-[#08d665] font-medium uppercase py-2 u">
                    recent news desk
                </p>
                <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-extrabold uppercase text-[#ffffff]">latest news & <span className="text-[#08d665]">blogs</span></h2>
            </div>

            <div className='py-8'>
                <Slider {...settings}>
                    {
                        items.map((item, index) => <div key={index}>
                            <div className='px-2 group cursor-pointer'>
                                <div className="overflow-hidden">
                                     <img className="group-hover:scale-105 duration-300" src={item.img} alt="" />
                                     <div className="bg-[#ffffff] py-4 px-6">
                                         <p className="text-lg">January {item.date}</p>
                                         <h2 className="lg:text-2xl md:text-2xl text-xl font-medium py-3 group-hover:text-[#08d665] duration-300">{item.title}</h2>
                                         <p className="text-sm font-medium text-[#08d665] flex items-center space-x-1 py-2">
                                                <span><GoArrowRight /></span>
                                                <span>READ MORE</span>
                                         </p>
                                     </div>
                                </div>
                            </div>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Blogs;