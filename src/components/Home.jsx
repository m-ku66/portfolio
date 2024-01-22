import React, { useState, useEffect } from 'react'
import HomeGal from './HomeGal';

const Home = ({ setSiteState }) => {
    const [navAnim, setNavAnim] = useState(false);

    const navLinkStyle = "duration-500 select-none cursor-pointer poppins phone:text-[0.6rem] medium:text-[1rem] italic text-stone-400 font-[500]";
    const galHolderStyle = "flex phone:w-[20rem] phone:h-[20rem] medium:w-[32rem] medium:h-[32rem] mt-[0%] mb-[10%]";
    const navHolderStyle1 = "opacity-[0%] flex w-full justify-center";
    const navHolderStyle2 = "fade1 flex w-full justify-center";

    useEffect(() => {
        setTimeout(() => {
            setNavAnim(true);
        }, 2000);
    }, [])

    return (
        <div className='relative flex justify-center items-center w-full h-full'>
            <div className='flex flex-col items-center'>
                <div data-aos='zoom-out' data-aos-duration='2000' className={galHolderStyle}>
                    <HomeGal />
                </div>

                <div className='flex'>
                    <h1 data-aos='fade-up' data-aos-duration='3000' className='select-none poppins phone:text-[2rem] tablet:text-[3rem] text-center phone:mb-[5%] tablet:mb-[1%]'>MARC MIANGO</h1>
                </div>

                <div className={navAnim ? navHolderStyle2 : navHolderStyle1}>
                    <p id='illust' className={navLinkStyle} onClick={() => setSiteState("illustration")}>ILLUSTRATOR</p>
                    <p className='select-none mx-[3%] phone:text-[0.5rem] medium:text-[1rem] text-stone-400'>|</p>
                    <p id='dev' className={navLinkStyle} onClick={() => setSiteState("web-dev")}>PROGRAMMER</p>
                    <p className='select-none mx-[3%] phone:text-[0.5rem] medium:text-[1rem] text-stone-400'>|</p>
                    <p id='music' className={navLinkStyle} onClick={() => setSiteState("music-production")}>COMPOSER</p>
                    <p className='select-none mx-[3%] phone:text-[0.5rem] medium:text-[1rem] text-stone-400'>|</p>
                    <p id='des' className={navLinkStyle} onClick={() => setSiteState("design")}>DESIGNER</p>
                </div>
            </div>
        </div>
    )
}

export default Home