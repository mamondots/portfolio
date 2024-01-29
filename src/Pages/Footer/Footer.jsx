

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

import items from '../../../public/brand.json'
import './Footer.css'




const Footer = () => {
    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
                    initialSlide: 1
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
        <div className="footer_banner">
            <div className='lg:px-28 md:px-20 sm:px-12 px-10 py-8'>
                <div className='py-8'>
                    <Slider {...settings}>
                        {
                            items.map((item, index) => <div key={index}>
                                <div className=''>
                                    <img src={item.img} alt="" />
                                </div>
                            </div>)
                        }
                    </Slider>
                </div>

                <div className="pt-12 flex justify-center items-center flex-col">
                    <ul className="flex flex-wrap lg:flex-nowrap items-center justify-center space-x-6 text-[#ffffff] cursor-pointer uppercase">
                        <li className="hover:text-[#08d665] duration-300"><a href="">About Us</a></li>
                        <li className="hover:text-[#08d665] duration-300"><a href="">career</a></li>
                        <li className="hover:text-[#08d665] duration-300"><a href="">blog</a></li>
                        <li className="hover:text-[#08d665] duration-300"><a href="">gallery</a></li>
                        <li className="hover:text-[#08d665] duration-300"><a href="">contact us</a></li>
                    </ul>

                    <p className="mt-12 text-[#ffffff32] text-sm text-center lowercase">COPYRIGHT @ 2024 BY <span className="text-[#08d665]">mamonrabin@gmail.com</span> ALL RIGHT RESERVED</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;