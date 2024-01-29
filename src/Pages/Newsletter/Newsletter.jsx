import './Newsletter.css'
import { HiOutlineMail } from "react-icons/hi";

const Newsletter = () => {
    return (
        <div className="newletter_bg">
            <div className='lg:px-28 md:px-20 sm:px-12 px-10 py-20'>
                <div className='flex items-center justify-center flex-col text-center text-[#ffffff]'>
                    <p className='text-[#08d665] font-medium py-2 text-xl'>NEWSLETTER</p>
                    <h2 className='lg:text-5xl md:text-5xl sm:text-4xl text-3xl font-bold new_letter'>STAY UP TO DATE, SUBSCRIBE<br></br> TO THE FREE <span>NEWSLETTER !</span></h2>
                    <form className='my-6 flex items-center space-x-3'>
                        <input
                            className='py-2 px-2 border-2 border-[#08d665] text-lg rounded lg:w-[40vh] w-full outline-none bg-transparent'
                            type="text" placeholder='Enter Your Email..' />
                        <button className='bg-[#08d665] border border-[#08d665] hover:bg-transparent duration-300 text-center px-6 rounded text-[#ffffff] py-2 flex items-center justify-center space-x-4'>
                            <span>SUBSCRIBE</span>
                            <span className='py-2 px-2 bg-[#ffffff] text-[#262626] rounded'><HiOutlineMail /></span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;