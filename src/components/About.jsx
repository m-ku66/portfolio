import React, { useState } from 'react'

const About = () => {
    
    const [languageState, setLanguageState] = useState('en');

    const enTxt = {
        pageHeader: 'About Me',
        pageContent: 'I go by couple of names on the internet, but you can just call me Marc. Ever since I was young I liked to learn about complex things and always asked about the why and how of their function/nature. Because of this, I\'ve made it my personal motto as an interdisciplinary content creator to always try new tools, and more importantly, to have fun doing that.',
        btnTxt: 'RESUME',
        sns: ['Instagram', 'Twitter(X)', 'Linkedin', 'Youtube'],
        langBtnTxt: '日本語'
    }

    const jpTxt = {
        pageHeader: '僕のこと',
        pageContent: 'インターネット上ではいくつかの名前で呼ばれていますが、マークと呼んでください。幼い頃から複雑なことについて学ぶことが好きで、その機能や性質がなぜどのようになっているのかを常に疑問に思っていたんです。それが、学際的なコンテンツクリエイターとしての道を歩むきっかけとなりました。新しいツールを試すことと、それを楽しむことが、個人的なモットーです。サイトの全部に翻訳機能を付けなくてごめんなさい m(-_-)m',
        btnTxt: '履歴書',
        sns: ['インスタグラム', 'ツイッター(X)', 'リンクトイン', 'ユーチューブ'],
        langBtnTxt: 'English'
    }

    const [sourceTxt, setSourceTxt] = useState(enTxt);

    function languageChange() {
        if(languageState === 'en') {
            setLanguageState('jp');
            setSourceTxt(jpTxt);
        } else if (languageState === 'jp') {
            setLanguageState('en');
            setSourceTxt(enTxt);
        }
    }
    
  return (
    <>
        <div className='phone:hidden tablet:flex w-full h-full bg-transparent px-[3%]'>
            <div className='flex w-full h-full bg-transparent'>
                <div className='flex flex-col justify-center w-[50%] h-full bg-trnasparent'>
                    <div data-aos='fade-up' data-aos-duration='500' className='fade mb-[8%]'>
                        <h1 className='select-none poppins font-400 text-[4rem] mb-[3%]'>{sourceTxt.pageHeader}</h1>
                        <p className='inter text-stone-400 text-[1rem]'>{sourceTxt.pageContent}</p>
                    </div>
                    {/* // */}
                    <a className='w-fit h-fit mb-[8%]' href={languageState === 'en' ? 'link to english resume' : 'link to jp resume'} target='_blank'>
                        <div data-aos='fade-up' data-aos-duration='1000' className="fade1 relative select-none cursor-pointer button w-fit h-fit outline outline-1 p-[0.5rem] pr-[3rem]">
                            <p className="inter">{sourceTxt.btnTxt}</p>
                            <img
                                className="absolute right-[5%] top-[30%] mr-[5%]"
                                src="/ui/download.svg"
                                alt=""
                            />
                        </div>
                    </a>
                    {/* // */}
                    <div data-aos='fade-up' data-aos-duration='2000' className='fade2 flex mb-[5%]'>
                        <a href=""><p className='duration-500 select-none inter text-stone-400 text-[0.8rem] hover:text-orange-500'>{sourceTxt.sns[0]}</p></a>
                        <p className='select-none inter text-stone-400 text-[0.8rem] mx-[2%]'>|</p>
                        <a href=""><p className='duration-500 select-none inter text-stone-400 text-[0.8rem] hover:text-black'>{sourceTxt.sns[1]}</p></a>
                        <p className='select-none inter text-stone-400 text-[0.8rem] mx-[2%]'>|</p>
                        <a href=""><p className='duration-500 select-none inter text-stone-400 text-[0.8rem] hover:text-blue-500'>{sourceTxt.sns[2]}</p></a>
                        <p className='select-none inter text-stone-400 text-[0.8rem] mx-[2%]'>|</p>
                        <a href=""><p className='duration-500 select-none inter text-stone-400 text-[0.8rem] hover:text-red-500'>{sourceTxt.sns[3]}</p></a>
                    </div>
                    {/* // */}
                    <div data-aos='fade-up' data-aos-duration='3000' onClick={() => languageChange()} className='w-fit h-fit bg-transparent'>
                        <p className='duration-500 select-none text-stone-400 hover:text-red-500 '>{sourceTxt.langBtnTxt}</p>
                    </div>
                </div>

                <div className='flex justify-center items-center w-[50%] h-full bg-transparent'>
                    <div data-aos='fade-up' data-aos-duration='2000' className='w-[60%] h-[60%]'>
                        <img className='select-none drop-shadow-[5px_5px_2px_rgba(0,0,0,0.2)]' src="/images/persona.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        

        {/* mobile view */}
        <div className='phone:flex tablet:hidden relative w-full h-full bg-transparent px-[5%] pt-[8%]'>
            <div className='flex flex-col items-center w-full h-[99%] bg-transparent'>
                <div className='flex justify-center items-center w-full h-[50%] bg-transparent mb-[0%]'>
                    <div data-aos='fade-up' data-aos-duration='2000' className='w-[70%] h-[70%]'>
                        <img className='select-none drop-shadow-[5px_5px_2px_rgba(0,0,0,0.2)]' src="/images/persona.png" alt="" />
                    </div>
                </div>
                {/* // */}
                <div data-aos='fade-up' data-aos-duration='500' className='fade mb-[1%]'>
                    <h1 className='text-center select-none poppins font-400 text-[3rem] mb-[3%]'>{sourceTxt.pageHeader}</h1>
                    <p className='text-center inter text-stone-400 text-[0.7rem]'>{sourceTxt.pageContent}</p>
                </div>
                {/* // */}
                <a className='w-fit h-fit mt-[8%] mb-[8%]' href={languageState === 'en' ? 'link to english resume' : 'link to jp resume'} target='_blank'>
                    <div className="fade1 relative select-none cursor-pointer button w-fit h-fit outline outline-1 p-[0.3rem] pr-[3rem]">
                        <p className="inter text-[0.8rem]">{sourceTxt.btnTxt}</p>
                        <img
                            className="absolute right-[5%] top-[30%] mr-[5%]"
                            src="/ui/download.svg"
                            alt=""
                        />
                    </div>
                </a>
                {/* // */}
                <div className='fade2 flex items-center justify-center mb-[3%] w-full'>
                    <a href=""><p className={languageState === 'en' ? 'duration-500 select-none inter text-stone-400 text-[0.7rem] hover:text-orange-500' : 'duration-500 select-none inter text-stone-400 text-[0.6rem] hover:text-orange-500'}>{sourceTxt.sns[0]}</p></a>
                    <p className='select-none inter text-stone-400 text-[0.8rem] mx-[2%]'>|</p>
                    <a href=""><p className={languageState === 'en' ? 'duration-500 select-none inter text-stone-400 text-[0.7rem] hover:text-black' : 'duration-500 select-none inter text-stone-400 text-[0.6rem] hover:text-black'}>{sourceTxt.sns[1]}</p></a>
                    <p className='select-none inter text-stone-400 text-[0.8rem] mx-[2%]'>|</p>
                    <a href=""><p className={languageState === 'en' ? 'duration-500 select-none inter text-stone-400 text-[0.7rem] hover:text-blue-500' : 'duration-500 select-none inter text-stone-400 text-[0.6rem] hover:text-blue-500'}>{sourceTxt.sns[2]}</p></a>
                    <p className='select-none inter text-stone-400 text-[0.8rem] mx-[2%]'>|</p>
                    <a href=""><p className={languageState === 'en' ? 'duration-500 select-none inter text-stone-400 text-[0.7rem] hover:text-red-500' : 'duration-500 select-none inter text-stone-400 text-[0.6rem] hover:text-red-500'}>{sourceTxt.sns[3]}</p></a>
                </div>
                {/* // */}
                <div onClick={() => languageChange()} className='absolute top-[2%] right-[2%] w-fit h-fit bg-transparent'>
                    <p className='duration-500 select-none text-stone-400 hover:text-red-500'>{sourceTxt.langBtnTxt}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About