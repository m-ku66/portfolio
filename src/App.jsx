import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Illustration from './components/Illustration'
import Music from './components/Music'
import Web from './components/Web'
import Design from './components/Design'
import About from './components/About'
import Contact from './components/Contact'


function App() {
  AOS.init();

  const [siteState, setSiteState] = useState("home");
  const [scrollState, setScrollState] = useState(false);
  const [containerState, setContainerState] = useState('load');

  let page;

  const container1 = "flex container max-w-full h-screen px-[2%] py-[2%] bg-white justify-center items-center";
  const container2 = "relative container max-w-full h-screen px-[2%] py-[2%] bg-white";

  useEffect(() => {
    page = document.getElementsByTagName('body');
    page[0].style.overflowY = scrollState ? "scroll" : "hidden";


    window.addEventListener('load', () => {
      setTimeout(() => {
        setSiteState("home");
        setContainerState("normal");
      }, 5000);
    });
  }, []);

  const renderContent = (currentState) => {
    let content;
    switch (currentState) {
      case 'loading':
        content = <div id='preloader'><p className="tablet:text-center phone:text-center tablet:w-[40%] phone:w-[60%] fade tablet:mt-[30%] phone:mt-[90%] select-none inter phone:text-[0.6rem] tablet:text-[0.8rem] italic text-stone-400">It is recommended to view this site on desktop as some features/projects may not function as intended on mobile devices</p></div>
        break;
      case 'home':
        content = <Home setSiteState={setSiteState} />
        break;
      case 'about':
        content = <About />
        break;
      case 'contact':
        content = <Contact />
        break;
      case 'illustration':
        content = <Illustration />
        break;
      case 'web-dev':
        content = <Web />
        break;
      case 'music-production':
        content = <Music />
        break;
      case 'design':
        content = <Design />
        break;
    }

    return content;
  }

  return (
    <div className={containerState === 'load' ? container1 : container2}>
      <Nav setSiteState={setSiteState} />
      {renderContent(siteState)}
    </ div>
  )
}

export default App


/**
 * TO DOS
 * Optional: try to implement img preloading
 * To update:
 * git add .
 * git commit -m "msg"
 * git push
 */