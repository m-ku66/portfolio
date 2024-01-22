import React, { useState } from 'react'

const Nav = ({ setSiteState }) => {
    const [navState, setNavState] = useState(true);
    const listStyle = 'duration-500 select-none cursor-pointer poppins tablet:tex-[1rem] medium:text-[1.5rem] font-[300] text-stone-400 my-[45%] hover:text-[#D80000]';

    const menuStyle1 = "hidden";
    const menuStyle2 = "slideFromLeft1 absolute left-[0%] top-[0%] z-[100] phone:w-full tablet:w-[25%] h-full bg-white drop-shadow-[5px_0_0.5px_rgba(0,0,0,0.2)]";
    const menuStyle3 = "slideToLeft1 absolute left-[0%] top-[0%] z-10 w-[20%] h-full bg-white drop-shadow-[5px_0_0.5px_rgba(0,0,0,0.2)]";



    return (
        <>
            <div className='absolute z-[101] phone:left-[2%] phone:top-[2%] tablet:left-[1%] tablet:top-[4.3%] phone:w-[5%] phone:h-[5%] medium:w-[3%] medium:h-[3%]'>
                <img onClick={() => setNavState(!navState)} className='cursor-pointer w-full h-full' src={navState ? "/ui/menu.svg" : "/ui/close.svg"} alt="" />
            </div>
            <div className={navState ? menuStyle1 : menuStyle2}>
                <ul className='fade1 absolute phone:left-[5%] tablet:left-[15%] top-[15%]'>
                    <li onClick={() => { setSiteState("home"), setNavState(true) }} className={listStyle}>HOME</li>
                    <li onClick={() => { setSiteState("about"), setNavState(true) }} className={listStyle}>ABOUT ME</li>
                    <li onClick={() => { setSiteState("contact"), setNavState(true) }} className={listStyle}>CONTACT</li>
                </ul>
            </div>
        </>
    )
}

export default Nav