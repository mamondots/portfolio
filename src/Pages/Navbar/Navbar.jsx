import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";



const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    return (
        <div className="py-8 relative z-10">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-[#c8c6c6]">Mamon<span className="text-[#08d665]">Dots</span></h2>
                </div>

                <div>
                    <div className="lg:flex items-center justify-center space-x-10 hidden">
                        <ul className="flex items-center justify-center xl:space-x-10 space-x-6 text-[#c8c6c6] uppercase">
                            <li className="hover:text-[#08d665] duration-300"><Link to='home' smooth={true} duration={1000} ><a href="">Home</a></Link></li>
                            <li className="hover:text-[#08d665] duration-300"><Link to='about' smooth={true} duration={1000}><a href="">About</a></Link></li>

                            <li className="hover:text-[#08d665] duration-300"><Link to='services' smooth={true} duration={1000}><a href="">Services</a></Link></li>
                            <li className="hover:text-[#08d665] duration-300"><Link to='portfolio' smooth={true} duration={1000}><a href="portfolio" >Portfolio</a></Link></li>
                            <li className="hover:text-[#08d665] duration-300"><Link to='testimonials' smooth={true} duration={1000}><a href="">Testimonials</a></Link></li>
                            <li className="hover:text-[#08d665] duration-300"><Link to='blogs' smooth={true} duration={1000}><a href="">Blogs</a></Link></li>
                        </ul>

                        <div>
                            <form className="flex items-center py-2 px-2 border border-[#c8c6c66d] rounded space-x-2">
                                <span className="z-10 text-[#08d665] relative"><FaSearch /></span>
                                <input className="text-[#fff] outline-none bg-transparent" type="text" placeholder="Search.." />
                            </form>
                        </div>
                    </div>

                    <div onClick={() => setOpenNav(true)} className="lg:hidden">
                        <p className="py-2 px-2 border text-[#c8c6c6] text-xl"><IoMenuOutline /></p>
                    </div>

                    <div className={`lg:hidden fixed top-0 bg-[#0A0C4C] w-full h-full z-50 p-5 duration-500 space-y-5 overflow-y-auto ${openNav ? "left-0" : "left-[-100%]"
                        }`}>

                        <div className="">
                            <div>
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-[#c8c6c6]">Mamon<span className="text-[#08d665]">Dots</span></h2>
                                    <div onClick={() => setOpenNav(false)} className="text-xl py-2 px-2 border text-[#fff] hover:bg-[#08D665] duration-300">
                                        <AiOutlineClose></AiOutlineClose>
                                    </div>
                                </div>

                                <div onClick={() => setOpenNav(false)} className="mt-12">
                                    <ul className=" text-[#c8c6c6] uppercase space-y-2">
                                        <li onClick={() => setOpenNav(false)} className="hover:text-[#08d665] duration-300"><Link to='home' smooth={true} duration={1000} ><a href="">Home</a></Link></li>
                                        <li onClick={() => setOpenNav(false)} className="hover:text-[#08d665] duration-300"><Link to='about' smooth={true} duration={1000}><a href="">About</a></Link></li>

                                        <li className="hover:text-[#08d665] duration-300"><Link to='services' smooth={true} duration={1000}><a href="">Services</a></Link></li>
                                        <li className="hover:text-[#08d665] duration-300"><Link to='portfolio' smooth={true} duration={1000}><a href="portfolio" >Portfolio</a></Link></li>
                                        <li className="hover:text-[#08d665] duration-300"><Link to='testimonials' smooth={true} duration={1000}><a href="">Testimonials</a></Link></li>
                                        <li className="hover:text-[#08d665] duration-300"><Link to='blogs' smooth={true} duration={1000}><a href="">Blogs</a></Link></li>
                                    </ul>

                                    <div className="mt-3">
                                        <form className="flex items-center py-2 px-2 border border-[#c8c6c66d] rounded space-x-2 w-1/2">
                                            <span className="z-10 text-[#08d665] relative"><FaSearch /></span>
                                            <input className="text-[#fff] outline-none bg-transparent" type="text" placeholder="Search.." />
                                        </form>
                                    </div>
                                </div>

                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;