import React from "react";

const Contact = () => {
  return (
    <>
      <div className="phone:hidden tablet:flex w-full h-full bg-transparent px-[3%]">
        <div className="flex w-full h-full bg-transparent">
          <div className="flex flex-col justify-center w-[50%] h-full bg-trnasparent">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className="fade mb-[8%]"
            >
              <h1 className="select-none poppins font-400 text-[4rem] mb-[3%]">
                Contact Me
              </h1>
              <p className="inter text-stone-400 text-[1rem]">
                Thank you for visiting my site. If any of my work intrigues
                you(or if you just want to have a word with me), then feel free
                to contact me via the most reliable source of communication I
                have:
              </p>
            </div>
            {/* // */}
            <div className="fade1 flex flex-col">
              <p className="inter text-stone-400 text-[1rem]">
                johanmarcmiango15@gmail.com(for business inquiries)
              </p>
              <p className="inter text-stone-400 text-[1rem]">
                makumanga@gmail.com(for commissions)
              </p>
            </div>
          </div>
          {/* // */}
          <div className="flex justify-center items-center w-[50%] h-full">
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="w-[60%] h-[60%]"
            >
              <img
                className="select-none drop-shadow-[5px_5px_2px_rgba(0,0,0,0.2)]"
                src="/images/contact.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="phone:flex tablet:hidden relative w-full h-full bg-transparent px-[5%] pt-[8%]">
        <div className="flex flex-col items-center w-full h-[99%] bg-transparent">
          <div className="flex justify-center items-center w-full h-[50%] bg-transparent mb-[0%]">
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="w-[70%] h-[70%]"
            >
              <img
                className="select-none drop-shadow-[5px_5px_2px_rgba(0,0,0,0.2)]"
                src="/images/contact.png"
                alt=""
              />
            </div>
          </div>
          {/* // */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="fade mb-[1%]"
          >
            <h1 className="text-center select-none poppins font-400 text-[3rem] mb-[3%]">
              Contact Me
            </h1>
            <p className="text-center inter text-stone-400 text-[0.7rem] mb-[10%]">
              Thank you for visiting my site. If any of my work intrigues you(or
              if you just want to have a word with me), then feel free to
              contact me via the most reliable source of communication I have:
            </p>
          </div>
          {/* // */}
          <div className="fade1 flex items-center flex-col">
            <p className="inter text-stone-400 text-[0.7rem]">
              johanmarcmiango15@gmail.com(for business inquiries)
            </p>
            <p className="inter text-stone-400 text-[0.7rem]">
              makumanga@gmail.com(for commissions)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
