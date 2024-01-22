import React, { useState } from 'react'
import ImageSources from './ImageSources'


const Illustration = () => {
    const [selected1, setSelected1] = useState(false);
    const [selected2, setSelected2] = useState(false);
    const [selected3, setSelected3] = useState(false);
    const [selected4, setSelected4] = useState(false);
    const [selected5, setSelected5] = useState(true);

    const blankObj = {
        url: '',
        illust: '',
        title: '',
        desc: '',
        tags: ['', '', ''],
    }

    const [selectedImg, setSelectedImg] = useState(blankObj);
    const [imgDisplay, setImgDisplay] = useState(false);

    const [fade, setFade] = useState(true);

    const displayStyle = "relative flex flex-col justify-center w-full h-full ml-[1%] phone:pt-[30%] tablet:pl-[5.5%] tablet:pt-[7%] medium:pl-[3.2%]";
    const gridStyling = "fade relative scrollGal w-full h-full grid phone:grid-cols-3 tablet:grid-cols-4 overflow-y-scroll";

    const imgStyling1 = "bg-cover img imgSat phone:w-[100px] phone:h-[100px] tablet:w-[150px] tablet:h-[150px] medium:w-[200px] medium:h-[200px] large:w-[300px] large:h-[300px] cursor-pointer phone:mb-[10%] tablet:mb-[20%]";
    const imgStyling2 = "hidden";

    const filterTextStyle1 = "duration-1000 select-none cursor-pointer inter phone:text-[1rem] tablet:text-[1.25rem] text-stone-400 hover:text-stone-600";
    const filterTextStyle2 = "select-none cursor-pointer inter text-[20px] text-black";

    const imgDisplayStyle1 = "hidden";
    const imgDisplayStyle2 = "fade absolute left-[0%] top-[0%] z-[102] w-full h-full px-[2%] py-[1%] bg-white";
    const imgDisplayStyle3 = "dissolve1 absolute left-[0%] top-[0%] z-[102] w-full h-full px-[2%] py-[1%] bg-white";

    let images = ImageSources;

    function handleSelect(option) {
        setFade(false);
        setTimeout(() => {
            setFade(true);
        }, 100);

        switch (option) {
            case 'chara':
                setSelected1(true);
                setSelected2(false);
                setSelected3(false);
                setSelected4(false);
                setSelected5(false);
                break;
            case 'des':
                setSelected1(false);
                setSelected2(true);
                setSelected3(false);
                setSelected4(false);
                setSelected5(false);
                break;
            case 'scn':
                setSelected1(false);
                setSelected2(false);
                setSelected3(true);
                setSelected4(false);
                setSelected5(false);
                break;
            case 'misc':
                setSelected1(false);
                setSelected2(false);
                setSelected3(false);
                setSelected4(true);
                setSelected5(false);
                break;
            case 'all':
                setSelected1(false);
                setSelected2(false);
                setSelected3(false);
                setSelected4(false);
                setSelected5(true);
                break;
        }
    }

    if (selected1) {
        images = ImageSources.filter((img) => img.tags.includes("character"));
    } else if (selected2) {
        images = ImageSources.filter((img) => img.tags.includes("design"));
    } else if (selected3) {
        images = ImageSources.filter((img) => img.tags.includes("scene"));
    } else if (selected4) {
        images = ImageSources.filter((img) => img.tags.includes("misc"));
    } else if (selected5) {
        images = ImageSources;
    }


    return (
        <>
            <div className={!imgDisplay ? imgDisplayStyle1 : imgDisplayStyle2}>
                <div className='relative flex phone:flex-col tablet:flex-row w-full h-full bg-white phone:overflow-y-scroll tablet:overflow-y-hidden'>
                    <div className='cursor-pointer phone:fixed tablet:absolute z-[103] phone:right-[3%] phone:top-[2%] tablet:top-[0%] tablet:right-[0%] w-[1.5rem] h-[1.5rem]'>
                        <img onClick={() => setImgDisplay(false)} src="/ui/close.svg" alt="" />
                    </div>

                    <div className='flex justify-center items-center phone:mb-[10%] phone:w-full tablet:w-[50%] h-full bg-black'>
                        <img className='bg-cover w-auto h-full' src={selectedImg.illust} alt="" />
                    </div>

                    <div className='relative pl-[3%] pr-[1%] py-[1%] flex flex-col phone:w-full tablet:w-[50%] h-full'>
                        <div>
                            <h1 className='select-none poppins phone:text-center tablet:text-left phone:text-[2rem] tablet:text-[4rem] font-[400] mb-[3%]'>{selectedImg.title}</h1>
                            <p className='inter phone:text-[0.8rem] tablet:text-[1rem] text-stone-400 phone:mb-[10%] tablet:mb-[0%]'>{selectedImg.desc}</p>
                            <p className='select-none tablet:absolute tablet:bottom-[5%] inter phone:text-[0.6rem] tablet:text-[0.8rem] italic text-stone-400'>Tags: {selectedImg.tags[0]} {selectedImg.tags[1] ? ',' : ''} {selectedImg.tags[1]} {selectedImg.tags[2] ? ',' : ''}  {selectedImg.tags[2]} {selectedImg.tags[3] ? ',' : ''} {selectedImg.tags[3]}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={displayStyle}>
                <div className='fade phone:ml-[4%] phone:mb-[10%] tablet:ml-[0%] tablet:mb-[3%] flex w-[40%] h-fit bg-transparent'>
                    <h1 onClick={() => handleSelect('chara')} className={!selected1 ? filterTextStyle1 : filterTextStyle2}>Character</h1>
                    <p className='select-none text-stone-400 mx-[5%]'>|</p>
                    <h1 onClick={() => handleSelect('des')} className={!selected2 ? filterTextStyle1 : filterTextStyle2}>Design</h1>
                    <p className='select-none text-stone-400 mx-[5%]'>|</p>
                    <h1 onClick={() => handleSelect('scn')} className={!selected3 ? filterTextStyle1 : filterTextStyle2}>Scene</h1>
                    <p className='select-none text-stone-400 mx-[5%]'>|</p>
                    <h1 onClick={() => handleSelect('misc')} className={!selected4 ? filterTextStyle1 : filterTextStyle2}>Misc</h1>
                    <p className='select-none text-stone-400 mx-[5%]'>|</p>
                    <h1 onClick={() => handleSelect('all')} className={!selected5 ? filterTextStyle1 : filterTextStyle2}>All</h1>
                </div>
                <div className={gridStyling}>
                    {images.map((number, numberIndex) => (
                        <div
                            onClick={() => { setSelectedImg(images[numberIndex]), setImgDisplay(true) }}
                            key={numberIndex}
                            style={{ backgroundImage: `url(${images[numberIndex].url})` }}
                            className={fade ? imgStyling1 : imgStyling2}></div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Illustration