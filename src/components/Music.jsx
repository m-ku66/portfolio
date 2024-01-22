import React, { useState } from 'react'
import MusicSources from './MusicSources';

const Music = () => {
    const [selected1, setSelected1] = useState(false);
    const [selected2, setSelected2] = useState(false);
    const [selected3, setSelected3] = useState(false);
    const [selected4, setSelected4] = useState(false);
    const [selected5, setSelected5] = useState(false);
    const [selected6, setSelected6] = useState(true);

    const [fade, setFade] = useState(true);
    let music = MusicSources;

    if (selected1) {
        music = MusicSources.filter((track) => track.tags.includes("JROCK"));
    } else if (selected2) {
        music = MusicSources.filter((track) => track.tags.includes("JPOP"));
    } else if (selected3) {
        music = MusicSources.filter((track) => track.tags.includes("EDM"));
    } else if (selected4) {
        music = MusicSources.filter((track) => track.tags.includes("Jazzy"));
    } else if (selected5) {
        music = MusicSources.filter((track) => track.tags.includes("Misc"));
    } else if (selected6) {
        music = MusicSources;
    }

    const [selectedSong, setSelectedSong] = useState(music[0]);

    const filterTextStyle1 = "duration-1000 select-none cursor-pointer inter phone:text-[1rem] medium:text-[1.25rem] text-stone-400 hover:text-stone-600";
    const filterTextStyle2 = "select-none cursor-pointer inter text-[20px] text-black";
    const gridStyling = "fade relative scrollGal phone:w-full tablet:w-[50%] h-full grid phone:grid-cols-3 tablet:grid-cols-3 overflow-y-scroll";
    const imgStyling1 = "img imgSat phone:w-[100px] phone:h-[100px] tablet:w-[100px] tablet:h-[100px] medium:w-[130px] medium:h-[130px] large:w-[200px] large:h-[200px] cursor-pointer phone:mb-[10%] tablet:mb-[20%] bg-stone-300";
    const imgStyling2 = "hidden";

    function handleSelect(option) {
        setFade(false);
        setTimeout(() => {
            setFade(true);
        }, 100);

        switch (option) {
            case 'jrock':
                setSelected1(true);
                setSelected2(false);
                setSelected3(false);
                setSelected4(false);
                setSelected5(false);
                setSelected6(false);
                break;
            case 'jpop':
                setSelected1(false);
                setSelected2(true);
                setSelected3(false);
                setSelected4(false);
                setSelected5(false);
                setSelected6(false);
                break;
            case 'edm':
                setSelected1(false);
                setSelected2(false);
                setSelected3(true);
                setSelected4(false);
                setSelected5(false);
                setSelected6(false);
                break;
            case 'jazz':
                setSelected1(false);
                setSelected2(false);
                setSelected3(false);
                setSelected4(true);
                setSelected5(false);
                setSelected6(false);
                break;
            case 'misc':
                setSelected1(false);
                setSelected2(false);
                setSelected3(false);
                setSelected4(false);
                setSelected5(true);
                setSelected6(false);
                break;
            case 'all':
                setSelected1(false);
                setSelected2(false);
                setSelected3(false);
                setSelected4(false);
                setSelected5(false);
                setSelected6(true);
                break;
        }
    }

    return (
        <div className='flex flex-col w-full h-full phone:pt-[30%] tablet:pl-[5.5%] tablet:pt-[10%] medium:pt-[7%] medium:pl-[3.2%] bg-transparent'>
            <div className='fade phone:ml-[4%] phone:mb-[10%] tablet:ml-[0%] tablet:mb-[3%] flex w-[40%] h-fit bg-transparent'>
                <h1 onClick={() => handleSelect('jrock')} className={!selected1 ? filterTextStyle1 : filterTextStyle2}>JROCK</h1>
                <p className='select-none text-stone-400 mx-[5%]'>|</p>
                <h1 onClick={() => handleSelect('jpop')} className={!selected2 ? filterTextStyle1 : filterTextStyle2}>JPOP</h1>
                <p className='select-none text-stone-400 mx-[5%]'>|</p>
                <h1 onClick={() => handleSelect('edm')} className={!selected3 ? filterTextStyle1 : filterTextStyle2}>EDM</h1>
                <p className='select-none text-stone-400 mx-[5%]'>|</p>
                <h1 onClick={() => handleSelect('jazz')} className={!selected4 ? filterTextStyle1 : filterTextStyle2}>Jazzy</h1>
                <p className='select-none text-stone-400 mx-[5%]'>|</p>
                <h1 onClick={() => handleSelect('misc')} className={!selected5 ? filterTextStyle1 : filterTextStyle2}>Misc</h1>
                <p className='select-none text-stone-400 mx-[5%]'>|</p>
                <h1 onClick={() => handleSelect('all')} className={!selected6 ? filterTextStyle1 : filterTextStyle2}>All</h1>
            </div>
            <div className='fade1 flex phone:flex-col tablet:flex-row w-full h-full overflow-y-clip bg-transparent'>
                <div className='flex flex-col phone:w-full tablet:w-[50%] h-full phone:mb-[15%] tablet:mb-[0%] mr-[1%]'>
                    <div className='relative flex w-full phone:h-[35vh] tablet:h-full bg-transparent'>

                        <div className='z-10 absolute tablet:bottom-[5%] medium:bottom-[20%] tablet:w-[90%] medium:w-[75%] tablet:h-[70%] medium:h-[50%] px-[5%] pt-[5%]'>
                            <h1 className='select-none poppins tablet:text-[2rem] medium:text-[3rem] font-[400] mb-[1%]'>{selectedSong.trackTitle}</h1>
                            <p className='mb-[2%] italic inter phone:text-[0.7rem] tablet:text-[0.7rem] medium:text-[0.7rem] font-[300]'>{selectedSong.date}</p>
                            <p className='inter phone:text-[0.7rem] tablet:text-[0.7rem] medium:text-[0.9rem] font-[300]'>{selectedSong.trackDesc}</p>
                            <p className='select-none absolute phone:bottom-[-50%] tablet:bottom-[20%] medium:bottom-[0%] inter phone:text-[0.7rem] tablet:text-[0.6rem] medium:text-[0.8rem] italic text-stone-400'>Tags: {selectedSong.tags[0]} {selectedSong.tags[1] ? ',' : ''} {selectedSong.tags[1]} {selectedSong.tags[2] ? ',' : ''} {selectedSong.tags[2]} {selectedSong.tags[3] ? ',' : ''} {selectedSong.tags[3]} {selectedSong.tags[4] ? ',' : ''} {selectedSong.tags[4]}</p>
                        </div>

                        <audio className='z-10 absolute bottom-[0%] w-full' src={selectedSong.track} controls />
                        {/* <div style={{ backgroundImage: `linear-gradient(${selectedSong.flavor}, transparent)`, opacity: "30%" }} className='w-full h-full mr-[1%]'>
                            <div style={{ backgroundImage: `linear-gradient(transparent, white)`, opacity: "100%" }} className='w-full h-full'></div>
                        </div> */}
                    </div>
                </div>

                <div className={gridStyling}>
                    {music.map((number, numberIndex) => (
                        <div
                            onClick={() => setSelectedSong(music[numberIndex])}
                            key={numberIndex}
                            style={{ backgroundImage: `url(${music[numberIndex].thumbnail})`, backgroundSize: 'cover' }}
                            className={fade ? imgStyling1 : imgStyling2}>
                            <div style={selectedSong === music[numberIndex] ? { borderColor: `${selectedSong.flavor}` } : { borderColor: 'transparent' }} className='w-full h-full border-solid border-2'>
                                <h1 className='duration-500 rotate mt-[5%] phone:ml-[20%] tablet:ml-[18%] inter text-transparent hover:text-white tablet:text-[1.2rem] phone:text-[0.8rem] font-[700]'>{music[numberIndex].trackTitle}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Music