import service from '../../assets/img/service1.svg'
import service2 from '../../assets/img/service2.svg'
import service3 from '../../assets/img/service3.svg'

const Services = () => {
    return (
        <div className='lg:px-28 md:px-20 sm:px-12 px-10 py-8' id='services'>
            <div>
                <p className="text-[#08d665] font-medium uppercase py-2">what we do</p>
                <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-[#ffffff] uppercase">services and <span className="text-[#08d665]">solutions</span></h2>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 py-12">
                <div className='py-8 px-8 group bg-[#131617] flex justify-center items-center flex-col text-center space-y-4 hover:bg-[#08d665] hover:rounded-lg cursor-pointer duration-300'>
                    <div className='py-6'>
                        <img src={service} alt="" />
                    </div>

                    <div className='space-y-4'>
                        <h2 className='text-[#08d665] uppercase group-hover:text-[#fff] text-2xl font-bold'>design principales</h2>
                        <p className='text-[#ffffff94] py-4 text-lg font-medium group-hover:text-[#fff] duration-300'>Need a project completed by an expert? Let’s go! Access a Human Resources Consultant to answer questions
                        </p>
                    </div>
                </div>

                <div className='py-8 px-8 group bg-[#08d665] flex justify-center items-center flex-col text-center space-y-4 hover:bg-[#08d665] hover:rounded-lg cursor-pointer duration-300'>
                    <div className='py-6'>
                        <img src={service2} alt="" />
                    </div>

                    <div className='space-y-4'>
                        <h2 className='text-[#fff] uppercase group-hover:text-[#fff] text-2xl font-bold'>
                            unique values
                        </h2>
                        <p className='text-[#fff] py-4 text-lg font-medium group-hover:text-[#fff] duration-300'>Need a project completed by an expert? Let’s go! Access a Human Resources Consultant to answer questions
                        </p>
                    </div>
                </div>

                <div className='py-8 px-8 group bg-[#131617] flex justify-center items-center flex-col text-center space-y-4 hover:bg-[#08d665] hover:rounded-lg cursor-pointer duration-300'>
                    <div className='py-6'>
                        <img src={service3} alt="" />
                    </div>

                    <div className='space-y-4'>
                        <h2 className='text-[#08d665] uppercase group-hover:text-[#fff] text-2xl font-bold'>
                            style components
                        </h2>
                        <p className='text-[#ffffff94] py-4 text-lg font-medium group-hover:text-[#fff] duration-300'>Need a project completed by an expert? Let’s go! Access a Human Resources Consultant to answer questions
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;