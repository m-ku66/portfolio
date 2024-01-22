import React, { useState } from "react";
import DevWorks from "./DevWorks";
import ProjectOverlay from "./ProjectOverlay";

const Web = () => {
  const [selectedWork, setSelectedWork] = useState(DevWorks[0]);
  const [overlayToggle, setOverlayToggle] = useState(false);

  const displayStyle1 =
    "relative phone:hidden tablet:flex justify-center w-full h-full";
  const displayStyle2 =
    "relative phone:flex tablet:hidden justify-center items-center w-full h-full overflow-y-scroll";
  const projectDisplay =
    "fade imgSat phone:w-[100px] h-[45px] tablet:w-[733px] tablet:h-[333px] medium:w-[1320px] medium:h-[600px] mr-[1%] bg-stone-400";
  const projectDisplayMobile = "fade phone:w-[300px] h-[136px] mt-[5%]";
  const projects = DevWorks;

  function renderOverlay() {
    let content = (
      <ProjectOverlay
        setOverlayToggle={setOverlayToggle}
        selectedWork={selectedWork}
      />
    );
    return content;
  }

  return (
    <>
      {overlayToggle ? renderOverlay() : null}

      <div className={displayStyle1}>
        <div
          style={{
            backgroundImage: `linear-gradient(0.25turn, transparent, white)`,
            opacity: "100%",
          }}
          className="absolute z-10 right-[0%] w-[20%] h-full"
        ></div>
        <div className="scrollGalH flex items-center absolute tablet:bottom-[5%] medium:bottom-[0%] large:bottom-[0%] larger:bottom-[10%] w-[95%] h-fit overflow-x-scroll">
          <div className="flex w-fit h-fit">
            {projects.map((number, numberIndex) => (
              <div
                onClick={() => {
                  setOverlayToggle(true),
                    setSelectedWork(projects[numberIndex]);
                }}
                key={numberIndex}
                style={{
                  backgroundImage: `url(${projects[numberIndex].thumbnail})`,
                  cursor: "pointer",
                  backgroundSize: "cover",
                }}
                className={projectDisplay}
              >
                <div
                  style={{backgroundImage: `linear-gradient(0.25turn, black, transparent)`,opacity: "100%",}} 
                  className="relative w-[80%] h-full px-[2%]">
                    <div className="absolute top-[40%]">
                      <h1 className="text-white fade select-none poppins tablet:text-[5rem] font-[400] mb-[2%]">{projects[numberIndex].name}</h1>
                      <p className="fade1 w-[60%] inter font-[300] tablet:text-[1.3rem] text-white ml-[2%] mb-[2%]">{projects[numberIndex].desc[0]}</p>
                      <p className="fade1 w-[60%] inter font-[200] tablet:text-[1rem] text-white ml-[2%]">{projects[numberIndex].desc[1]}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={displayStyle2}>
        <div className="flex justify-center absolute w-[95%] h-fit overflow-y-scroll bg-transparent">
          <div className="flex flex-col w-fit h-fit mt-[30%] mb-[20%]">
            {projects.map((number, numberIndex) => (
              <div
                onClick={() => {
                  setOverlayToggle(true),
                    setSelectedWork(projects[numberIndex]);
                }}
                key={numberIndex}
                style={{
                  backgroundImage: `url(${projects[numberIndex].thumbnail})`,
                  backgroundSize: "cover",
                }}
                className={projectDisplayMobile}
              >
                <div
                  style={{backgroundImage: `linear-gradient(0.25turn, black, transparent)`,opacity: "100%",}} 
                  className="relative w-[80%] h-full px-[2%]">
                    <div className="absolute top-[20%]">
                      <h1 className="text-white fade select-none poppins text-[1rem] font-[400] mb-[2%]">{projects[numberIndex].name}</h1>
                      <p className="fade1 w-[60%] inter font-[300] text-[0.8rem] text-white ml-[2%] mb-[2%]">{projects[numberIndex].desc[0]}</p>
                      <p className="fade1 w-[70%] inter font-[200] text-[0.6rem] text-white ml-[2%]">{projects[numberIndex].desc[1]}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Web;
