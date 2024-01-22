import React, { useState } from "react";

const ProjectOverlay = ({ setOverlayToggle, selectedWork }) => {
  const [selected1, setSelected1] = useState(true);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);
  const [selected5, setSelected5] = useState(false);

  const filterTextStyle1 =
    "duration-1000 select-none cursor-pointer inter phone:text-[0.7rem] tablet:text-[1.25rem] text-stone-400 hover:text-stone-600";
  const filterTextStyle2 =
    "select-none cursor-pointer inter phone:text-[0.8rem] tablet:text-[20px] text-black";

  function handleSelect(option) {
    switch (option) {
      case "chara":
        setSelected1(true);
        setSelected2(false);
        setSelected3(false);
        setSelected4(false);
        setSelected5(false);
        break;
      case "des":
        setSelected1(false);
        setSelected2(true);
        setSelected3(false);
        setSelected4(false);
        setSelected5(false);
        break;
      case "scn":
        setSelected1(false);
        setSelected2(false);
        setSelected3(true);
        setSelected4(false);
        setSelected5(false);
        break;
      case "misc":
        setSelected1(false);
        setSelected2(false);
        setSelected3(false);
        setSelected4(true);
        setSelected5(false);
        break;
      case "all":
        setSelected1(false);
        setSelected2(false);
        setSelected3(false);
        setSelected4(false);
        setSelected5(true);
        break;
    }
  }

  return (
    <>
      <div className="phone:hidden tablet:flex fade relative w-full h-full bg-white z-[80] px-[2%]">
        <div className="absolute right-[-0.5%] phone:w-[5%] phone:h-[5%] medium:w-[1.5%] medium:h-[1.5%]">
          <img
            onClick={() => setOverlayToggle(false)}
            className="cursor-pointer select-none"
            src="/ui/close.svg"
            alt=""
          />
        </div>

        <div className="flex w-full h-full">
          <div className="pl-[3%] pt-[10%] flex w-[19%] mr-[1%] h-full bg-white drop-shadow-[1.5px_0_0px_rgba(0,0,0,0.2)]">
            <div className="flex flex-col">
              <h1
                style={{ marginBottom: "20%" }}
                onClick={() => handleSelect("chara")}
                className={!selected1 ? filterTextStyle1 : filterTextStyle2}
              >
                Final Result
              </h1>
              <h1
                style={{ marginBottom: "20%" }}
                onClick={() => handleSelect("des")}
                className={!selected2 ? filterTextStyle1 : filterTextStyle2}
              >
                Problem Statement
              </h1>
              <h1
                style={{ marginBottom: "20%" }}
                onClick={() => handleSelect("scn")}
                className={!selected3 ? filterTextStyle1 : filterTextStyle2}
              >
                Solution
              </h1>
              <h1
                style={{ marginBottom: "20%" }}
                onClick={() => handleSelect("misc")}
                className={!selected4 ? filterTextStyle1 : filterTextStyle2}
              >
                Process
              </h1>
              <h1
                style={{ marginBottom: "0%" }}
                onClick={() => handleSelect("all")}
                className={!selected5 ? filterTextStyle1 : filterTextStyle2}
              >
                Conclusion
              </h1>
            </div>
          </div>

          <div className="w-[80%] h-full bg-transparent">
            <div className={selected1 ? "relative w-full h-full" : "hidden"}>
              {selectedWork.isEmbed ? (
                <div></div>
              ) : (
                <a href={selectedWork.source} target="_blank">
                  <div
                    className="flex items-center justify-center absolute z-[5] medium:w-full medium:h-[59%] large:w-full large:h-[88%] bg-white"
                  >
                    <img className="w-full h-[88%]" src={selectedWork.img} alt="" />
                  </div>
                </a>
              )}
              <div
                className="fade bg-black"
                style={{
                  marginBottom: "0.5%",
                  padding: "56.25% 0 0 0",
                  position: "relative",
                }}
              >
                <iframe
                  src={selectedWork.source}
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  style={{
                    position: "absolute",
                    top: "0%",
                    left: "0%",
                    width: "100%",
                    height: "100%",
                  }}
                  title={selectedWork.name}
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
              <p className="fade1 select-none inter phone:text-[0.6rem] tablet:text-[0.8rem] italic text-stone-400">
                Tools used: {selectedWork.toolsUsed[0]}{" "}
                {selectedWork.toolsUsed[1] ? "," : ""}{" "}
                {selectedWork.toolsUsed[1]}{" "}
                {selectedWork.toolsUsed[2] ? "," : ""}{" "}
                {selectedWork.toolsUsed[2]}{" "}
                {selectedWork.toolsUsed[3] ? "," : ""}{" "}
                {selectedWork.toolsUsed[3]}{" "}
                {selectedWork.toolsUsed[4] ? "," : " "}{" "}
                {selectedWork.toolsUsed[4]}
                {selectedWork.toolsUsed[5] ? "," : " "}{" "}
                {selectedWork.toolsUsed[5]}
                {selectedWork.toolsUsed[6] ? "," : " "}{" "}
                {selectedWork.toolsUsed[6]}
                {selectedWork.toolsUsed[7] ? "," : " "}{" "}
                {selectedWork.toolsUsed[7]}
                {selectedWork.toolsUsed[8] ? "," : " "}{" "}
                {selectedWork.toolsUsed[8]}
              </p>
            </div>

            <div
              className={selected2 ? "w-full h-full pl-[2%] pt-[1%]" : "hidden"}
            >
              <div>
                <h1 className="fade select-none poppins phone:text-center tablet:text-left phone:text-[2rem] tablet:text-[3rem] font-[400] mb-[3%]">
                  A problem is amiss...
                </h1>
                <p className="fade1 w-[60%] inter phone:text-[0.8rem] tablet:text-[1rem] text-stone-400">
                  {selectedWork.problemStatement}
                </p>
              </div>
            </div>

            <div
              className={selected3 ? "w-full h-full pl-[2%] pt-[1%]" : "hidden"}
            >
              <div>
                <h1 className="fade select-none poppins phone:text-center tablet:text-left phone:text-[2rem] tablet:text-[3rem] font-[400] mb-[3%]">
                  This is my idea to solve it
                </h1>
                <p className="fade1 w-[60%] inter phone:text-[0.8rem] tablet:text-[1rem] text-stone-400">
                  {selectedWork.solution}
                </p>
              </div>
            </div>

            <div
              className={selected4 ? "w-full h-full pl-[2%] pt-[1%]" : "hidden"}
            >
              <div className="w-full h-full">
                <div style={{backgroundImage: `url(${selectedWork.process[0]})`, backgroundSize: "cover"}} className="fade w-full h-full bg-stone-400"></div>
                <p className="fade1 select-none inter phone:text-[0.6rem] tablet:text-[0.8rem] italic text-stone-400">
                  {selectedWork.process[1]}
                </p>
              </div>
            </div>

            <div
              className={selected5 ? "w-full h-full pl-[2%] pt-[1%]" : "hidden"}
            >
              <div>
                <h1 className="fade select-none poppins phone:text-center tablet:text-left phone:text-[2rem] tablet:text-[3rem] font-[400] mb-[3%]">
                  That's how I made what I made
                </h1>
                <p className="fade1 w-[60%] inter phone:text-[0.8rem] tablet:text-[1rem] text-stone-400">
                  {selectedWork.conclusion}
                </p>
                <div className="buttonHolder flex mt-[10%]">
                  <a href={selectedWork.caseStudy} target="_blank">
                    <div className="fade2 relative select-none cursor-pointer button w-fit h-fit outline outline-1 p-[0.5rem] pr-[3rem]">
                      <p className="inter">CASE STUDY</p>
                      <img
                        className="absolute right-[5%] top-[30%] mr-[5%]"
                        src="/ui/download.svg"
                        alt=""
                      />
                    </div>
                  </a>

                  <div className="mx-[3%]"></div>

                  <a href={selectedWork.files} target="_blank">
                    <div className="fade2 relative select-none cursor-pointer button w-fit h-fit outline outline-1 p-[0.5rem] pr-[3rem]">
                      <p className="inter">SOURCE FILES</p>
                      <img
                        className="absolute right-[5%] top-[30%] mr-[5%]"
                        src="/ui/download.svg"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <p className="mt-[10%] text-red-500 inter">*Source files may be large and may require software that you do not own</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view  */}

      <div className="phone:flex tablet:hidden flex-col fade relative w-full h-full bg-white z-[80] px-[2%]">
        <div className="absolute bottom-[-10%] w-full h-[20%] bg-white z-[510]"></div>
        <div className="absolute top-[1.7%] right-[-0.1%] phone:w-[5%] phone:h-[5%] medium:w-[1.5%] medium:h-[1.5%]">
          <img
            onClick={() => setOverlayToggle(false)}
            className="cursor-pointer select-none"
            src="/ui/close.svg"
            alt=""
          />
        </div>

        <div
          className={selected1 ? "relative w-full h-full mt-[20%]" : "hidden"}
        >
          {selectedWork.isEmbed ? (
            <div></div>
          ) : (
            <a href={selectedWork.source} target="_blank">
              <div
                    className="flex justify-center absolute z-[5] medium:w-full medium:h-[59%] large:w-full large:h-[88%] bg-red-500"
                  >
                    <img className="w-full h-full" src={selectedWork.img} alt="" />
                  </div>
            </a>
          )}
          <div
            className="fade"
            style={{
              marginBottom: "0.5%",
              padding: "56.25% 0 0 0",
              position: "relative",
            }}
          >
            <iframe
              src={selectedWork.isEmbed ? selectedWork.source : ""}
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                position: "absolute",
                top: "0%",
                left: "0%",
                width: "100%",
                height: "100%",
              }}
              title={selectedWork.name}
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
          <p className=" fade1 select-none inter phone:text-[0.6rem] text-center italic text-stone-400">
            Tools used: {selectedWork.toolsUsed[0]}{" "}
            {selectedWork.toolsUsed[1] ? "," : ""} {selectedWork.toolsUsed[1]}{" "}
            {selectedWork.toolsUsed[2] ? "," : ""} {selectedWork.toolsUsed[2]}{" "}
            {selectedWork.toolsUsed[3] ? "," : ""} {selectedWork.toolsUsed[3]}{" "}
            {selectedWork.toolsUsed[4] ? "," : " "} {selectedWork.toolsUsed[4]}
            {selectedWork.toolsUsed[5] ? "," : " "} {selectedWork.toolsUsed[5]}
            {selectedWork.toolsUsed[6] ? "," : " "} {selectedWork.toolsUsed[6]}
            {selectedWork.toolsUsed[7] ? "," : " "} {selectedWork.toolsUsed[7]}
            {selectedWork.toolsUsed[8] ? "," : " "} {selectedWork.toolsUsed[8]}
          </p>
        </div>

        <div
          className={selected2 ? "w-full h-full pl-[2%] pt-[15%]" : "hidden"}
        >
          <div>
            <h1 className="fade select-none poppins phone:text-left tablet:text-left phone:text-[1.7rem] tablet:text-[3rem] font-[400] mt-[10%] mb-[5%]">
              A problem is amiss...
            </h1>
            <p className="fade1 w-[100%] inter phone:text-[0.8rem] tablet:text-[1rem] text-stone-400">
              {selectedWork.problemStatement}
            </p>
          </div>
        </div>

        <div
          className={selected3 ? "w-full h-full pl-[2%] pt-[15%]" : "hidden"}
        >
          <div>
            <h1 className="fade select-none poppins phone:text-left tablet:text-left phone:text-[1.7rem] tablet:text-[3rem] font-[400] mt-[10%] mb-[5%]">
              This is my idea to solve it
            </h1>
            <p className="fade1 w-[100%] inter phone:text-[0.8rem] tablet:text-[1rem] text-stone-400">
              {selectedWork.solution}
            </p>
          </div>
        </div>

        <div
          className={selected4 ? "w-full h-full pl-[2%] pt-[15%]" : "hidden"}
        >
          <div className="w-full h-full">
          <div style={{backgroundImage: `url(${selectedWork.process[0]})`, backgroundSize: "cover"}} className="fade w-full h-full bg-stone-400"></div>
            <p className="fade1 select-none inter phone:text-[0.6rem] tablet:text-[0.8rem] italic text-stone-400">
              {selectedWork.process[1]}
            </p>
          </div>
        </div>

        <div
          className={selected5 ? "w-full h-full pl-[2%] pt-[15%]" : "hidden"}
        >
          <div>
            <h1 className="fade select-none poppins phone:text-left tablet:text-left phone:text-[1.7rem] tablet:text-[3rem] font-[400] mt-[10%] mb-[5%]">
              That's how I made what I made
            </h1>
            <p className="fade1 w-[100%] inter phone:text-[0.8rem] tablet:text-[1rem] text-stone-400">
              {selectedWork.conclusion}
            </p>
            <div className="buttonHolder flex mt-[10%]">
              <a href="">
                <div className="fade2 relative select-none cursor-pointer button w-fit h-fit outline outline-1 p-[0.3rem] pr-[3rem]">
                  <p className="inter text-[0.7rem]">CASE STUDY</p>
                  <img
                    className="absolute right-[5%] top-[30%] mr-[5%]"
                    src="/ui/download.svg"
                    alt=""
                  />
                </div>
              </a>

              <div className="mx-[3%]"></div>

              <div className="fade2 relative select-none cursor-pointer button w-fit h-fit outline outline-1 p-[0.3rem] pr-[3rem]">
                <p className="inter text-[0.7rem]">SOURCE FILES</p>
                <img
                  className="absolute right-[5%] top-[30%] mr-[5%]"
                  src="/ui/download.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pl-[3%] pt-[10%] mb-[20%] flex w-[100%] h-fit bg-white drop-shadow-[0px_-1.5px_0px_rgba(0,0,0,0.2)]">
          <div className="flex">
            <h1
              style={{ marginBottom: "10%" }}
              onClick={() => handleSelect("chara")}
              className={!selected1 ? filterTextStyle1 : filterTextStyle2}
            >
              Result
            </h1>
            <p className="select-none mx-[3%] phone:text-[0.6rem] medium:text-[1rem] text-stone-400">
              |
            </p>
            <h1
              style={{ marginBottom: "10%" }}
              onClick={() => handleSelect("des")}
              className={!selected2 ? filterTextStyle1 : filterTextStyle2}
            >
              Statement
            </h1>
            <p className="select-none mx-[3%] phone:text-[0.6rem] medium:text-[1rem] text-stone-400">
              |
            </p>
            <h1
              style={{ marginBottom: "10%" }}
              onClick={() => handleSelect("scn")}
              className={!selected3 ? filterTextStyle1 : filterTextStyle2}
            >
              Solution
            </h1>
            <p className="select-none mx-[3%] phone:text-[0.6rem] medium:text-[1rem] text-stone-400">
              |
            </p>
            <h1
              style={{ marginBottom: "10%" }}
              onClick={() => handleSelect("misc")}
              className={!selected4 ? filterTextStyle1 : filterTextStyle2}
            >
              Process
            </h1>
            <p className="select-none mx-[3%] phone:text-[0.6rem] medium:text-[1rem] text-stone-400">
              |
            </p>
            <h1
              style={{ marginBottom: "10%" }}
              onClick={() => handleSelect("all")}
              className={!selected5 ? filterTextStyle1 : filterTextStyle2}
            >
              Conclusion
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectOverlay;
