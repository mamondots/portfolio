import { MdKeyboardArrowRight } from 'react-icons/md';
import service from '../../assets/img/service1.svg'
import service2 from '../../assets/img/service2.svg'
import service3 from '../../assets/img/service3.svg'
import './Pricing.css'

const Pricing = () => {
    return (
        <div className='lg:px-28 md:px-20 sm:px-12 px-10 py-8'>
            <div>
                <p className="text-[#08d665] font-medium uppercase py-2">specifications</p>
                <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-[#ffffff] uppercase">all our payment <span className="text-[#08d665]">options</span></h2>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 py-12">

                <div className='py-8 px-8 group bg-[#131617] flex justify-center items-center flex-col text-center space-y-4 hover:bg-[#08d665] hover:rounded-lg cursor-pointer duration-300'>
                    <div className='py-6'>
                        <img src={service} alt="" />
                    </div>

                    <div className='space-y-4'>
                        <h2 className='text-[#08d665] uppercase group-hover:text-[#fff] text-3xl font-bold'>
                            influencer
                        </h2>
                        <p className='text-[#ffffff94] px-10 text-lg pricing_subtitle group-hover:text-[#fff] duration-300'>
                            Best for small Investor
                        </p>
                    </div>

                    <div className='py-6 space-y-4'>
                        <h2 className='text-[#08d665] group-hover:text-[#fff] font-bold text-3xl'>$104</h2>
                        <p className='text-[#ffffff94] px-10 group-hover:text-[#fff] text-lg'>Per Month</p>
                        <div className='pt-4'>
                            <button className='bg-[#08d665] group-hover:bg-[#2ea564] duration-300 text-[#ffffff] text-center px-6 py-3 rounded font-medium flex items-center justify-center space-x-4'><span>Read More</span>  <span className='text-[#08d665] py-2 px-2 bg-[#ffffff] rounded'><MdKeyboardArrowRight /></span></button>
                        </div>
                    </div>

                </div>

                <div className='py-8 px-8 group bg-[#08d665] flex justify-center items-center flex-col text-center space-y-4 hover:bg-[#08d665] hover:rounded-lg cursor-pointer duration-300'>
                    <div className='py-6'>
                        <img src={service2} alt="" />
                    </div>

                    <div className='space-y-4'>
                        <h2 className='text-[#fff] uppercase group-hover:text-[#fff] text-3xl font-bold'>
                            agency
                        </h2>
                        <p className='text-[#fff] px-10 text-lg pricing_subtitle group-hover:text-[#fff] duration-300'>
                            Best for small Investor
                        </p>
                    </div>

                    <div className='py-6 space-y-4'>
                        <h2 className='text-[#fff] group-hover:text-[#fff] font-bold text-3xl'>$204</h2>
                        <p className='text-[#fff] px-10 group-hover:text-[#fff] text-lg'>Per Month</p>
                        <div className='pt-4'>
                            <button className='bg-[#08d665] group-hover:bg-[#2ea564] duration-300 text-[#ffffff] text-center px-6 py-3 rounded font-medium flex items-center justify-center space-x-4'><span>READ MORE</span>  <span className='text-[#08d665] py-2 px-2 bg-[#ffffff] rounded'><MdKeyboardArrowRight /></span></button>
                        </div>
                    </div>

                </div>

                <div className='py-8 px-8 group bg-[#131617] flex justify-center items-center flex-col text-center space-y-4 hover:bg-[#08d665] hover:rounded-lg cursor-pointer duration-300'>
                    <div className='py-6'>
                        <img src={service3} alt="" />
                    </div>

                    <div className='space-y-4'>
                        <h2 className='text-[#08d665] uppercase group-hover:text-[#fff] text-3xl font-bold'>
                            enterprise
                        </h2>
                        <p className='text-[#ffffff94] px-10 text-lg pricing_subtitle group-hover:text-[#fff] duration-300'>
                            Best for small Investor
                        </p>
                    </div>

                    <div className='py-6 space-y-4'>
                        <h2 className='text-[#08d665] group-hover:text-[#fff] uppercase font-bold text-3xl'>Let's chart</h2>
                        <p className='text-[#ffffff94] px-10 group-hover:text-[#fff] text-lg'>Per Month</p>
                        <div className='pt-4'>
                            <button className='bg-[#08d665] group-hover:bg-[#2ea564] duration-300 text-[#ffffff] text-center px-6 py-3 rounded font-medium flex items-center justify-center space-x-4'><span>READ MORE</span>  <span className='text-[#08d665] py-2 px-2 bg-[#ffffff] rounded'><MdKeyboardArrowRight /></span></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pricing;