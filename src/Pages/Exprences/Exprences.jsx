import allData from '../../../public/exprences.json'

const Exprences = () => {
    return (
        <div className='lg:px-28 md:px-20 sm:px-12 px-10 py-8'>
            <div>
                 <p className="text-[#08d665] font-medium uppercase py-2">MY EXPERIENCE</p>
                 <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-[#ffffff]">EXPERIENCE AND <span className="text-[#08d665]">SKILL</span></h2>
            </div>

            <div className='text-[#ffffff] py-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-4 gap-2'>
                 {
                    allData.map((data,index) => <div key={index}>
                        <div className='bg-[#0b0d0e] border border-[#30393db9] shadow-md px-4 py-4 space-y-2 hover:bg-[#1b1b1c] duration-300 hover:shadow-xl cursor-pointer'>
                            <p className=''>{data.year} (UI DESIGNER)</p>
                            <h2 className='text-[#08d665] font-semibold text-xl'>{data.title}</h2>
                            <p>{data.about}</p>
                        </div>
                    </div>)
                 }
            </div>
        </div>
    );
};

export default Exprences;