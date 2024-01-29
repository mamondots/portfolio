import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";


const GoToTop = () => {
    const [visible,setVisible] = useState(false)

    const backTop = () =>{
        window.scrollTo({top:0,left:0, behavior:"smooth"})
    }

    const listentToScroll = () =>{
        let height = 350
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop

        if(winScroll>height ){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll",listentToScroll)
    },[])
    return (
        <div>
            {
                visible && (
                    <div onClick={backTop} className="fixed top-[36vh] right-10">
                        <p className="text-[#fff] bg-[#08D665] cursor-pointer 
                        rounded-full shadow-lg py-2 px-2 text-2xl ">
                            <IoIosArrowUp />

                        </p>
                    </div>
                )
            }
        </div>
    );
};

export default GoToTop;