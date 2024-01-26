import React, { useState, useEffect } from "react";

const HomeGal = () => {
  //it takes roughly 3 seconds for all the images to load
  //either find a good way of preloading OR create a sort of 3 sec timer
  //either way, you're going to be optimizing the images you use so load times
  //could improve

  function randomizer() {
    let number = Math.floor(Math.random() * 8);
    return number;
  }

  const img1 = "/images/home-gal/home-cover.png";
  const img2 = "/images/home-gal/1.png";
  const img3 = "/images/home-gal/2.png";
  const img4 = "/images/home-gal/3.png";
  const img5 = "/images/home-gal/4.png";
  const img6 = "/images/home-gal/5.png";
  const img7 = "/images/home-gal/6.png";


  useEffect(() => {
    switch (randomizer()) {
      case 1:
        setSourceImg(img1)
        break;
      case 2:
        setSourceImg(img2)
        break;
      case 3:
        setSourceImg(img3)
        break;
      case 4:
        setSourceImg(img4)
        break;
      case 5:
        setSourceImg(img5)
        break;
      case 6:
        setSourceImg(img6)
        break;
      case 7:
        setSourceImg(img7)
        break;
    }
  }, []);

  const [sourceImg, setSourceImg] = useState(img1);

  return (
    <div className="relative flex justify-center w-full h-full bg-transparent">
      <div
        style={{ clipPath: "inset(8% 65% 60% 8%)", transition: "1s" }}
        className="bg-[#D80000]/[0.5] hover:bg-transparent absolute z-[10] w-full h-full"
      ></div>
      <img
        style={{ clipPath: "inset(8% 65% 60% 8%)" }}
        className="absolute z-[5]"
        src={sourceImg}
        alt="cover image"
      />

      <div
        style={{ clipPath: "inset(0% 20% 73% 38%)", transition: "1s" }}
        className="bg-[#FF3326]/[0.3] hover:bg-transparent absolute z-[10] w-full h-full"
      ></div>
      <img
        style={{ clipPath: "inset(0% 20% 73% 38%)" }}
        className="absolute z-[5]"
        src={sourceImg}
        alt="cover image"
      />

      <div
        style={{ clipPath: "inset(30% 38% 30% 38%)", transition: "1s" }}
        className="bg-[#D80000]/[0.5] hover:bg-transparent absolute z-[10] w-full h-full"
      ></div>
      <img
        style={{ clipPath: "inset(30% 38% 30% 38%)" }}
        className="absolute z-[5]"
        src={sourceImg}
        alt="cover image"
      />

      <div
        style={{ clipPath: "inset(43% 65% 30% 0%)", transition: "1s" }}
        className="bg-[#434343]/[0.7] hover:bg-transparent absolute z-[10] w-full h-full"
      ></div>
      <img
        style={{ clipPath: "inset(43% 65% 30% 0%)" }}
        className="absolute z-[5]"
        src={sourceImg}
        alt="cover image"
      />

      <div
        style={{ clipPath: "inset(30% 0% 38% 65%)", transition: "1s" }}
        className="bg-[#FF3326]/[0.3] hover:bg-transparent absolute z-[10] w-full h-full"
      ></div>
      <img
        style={{ clipPath: "inset(30% 0% 38% 65%)" }}
        className="absolute z-[5]"
        src={sourceImg}
        alt="cover image"
      />

      <div
        style={{ clipPath: "inset(65% 3% 10% 65%)", transition: "1s" }}
        className="bg-[#D80000]/[0.5] hover:bg-transparent absolute z-[10] w-full h-full"
      ></div>
      <img
        style={{ clipPath: "inset(65% 3% 10% 65%)" }}
        className="absolute z-[5]"
        src={sourceImg}
        alt="cover image"
      />

      <div
        style={{ clipPath: "inset(73% 38% 0% 30%)", transition: "1s" }}
        className="bg-[#434343]/[0.7] hover:bg-transparent absolute z-[10] w-full h-full"
      ></div>
      <img
        style={{ clipPath: "inset(73% 38% 0% 30%)" }}
        className="absolute z-[5]"
        src={sourceImg}
        alt="cover image"
      />

      <div
        style={{ clipPath: "inset(73% 73% 15% 15%)", transition: "1s" }}
        className="bg-[#D80000]/[0.7] hover:bg-transparent absolute z-[10] w-full h-full"
      ></div>
      <img
        style={{ clipPath: "inset(73% 73% 15% 15%)" }}
        className="absolute z-[5]"
        src={sourceImg}
        alt="cover image"
      />

      <div
        style={{ clipPath: "inset(73% 86% 20% 7%)", transition: "1s" }}
        className="bg-[#434343]/[0.9] hover:bg-transparent absolute z-[10] w-full h-full"
      ></div>
      <img
        style={{ clipPath: "inset(73% 86% 20% 7%)" }}
        className="absolute z-[5]"
        src={sourceImg}
        alt="cover image"
      />

      <div
        style={{ clipPath: "inset(82% 86% 10% 6%)", transition: "1s" }}
        className="bg-[#434343]/[0.9] hover:bg-transparent absolute z-[10] w-full h-full"
      ></div>
      <img
        style={{ clipPath: "inset(82% 86% 10% 6%)" }}
        className="absolute z-[5]"
        src={sourceImg}
        alt="cover image"
      />

      <div
        style={{ clipPath: "inset(17% 7% 73% 83%)", transition: "1s" }}
        className="bg-[#FF6E04]/[0.3] hover:bg-transparent absolute z-[10] w-full h-full"
      ></div>
      <img
        style={{ clipPath: "inset(17% 7% 73% 83%)" }}
        className="absolute z-[5]"
        src={sourceImg}
        alt="cover image"
      />

      <div
        style={{ clipPath: "inset(22% 0% 73% 95%)", transition: "1s" }}
        className="bg-[#FF6E04]/[0.3] hover:bg-transparent absolute z-[10] w-full h-full"
      ></div>
      <img
        style={{ clipPath: "inset(22% 0% 73% 95%)" }}
        className="absolute z-[5]"
        src={sourceImg}
        alt="cover image"
      />

      <div
        style={{ clipPath: "inset(10% 12% 85% 83%)", transition: "1s" }}
        className="bg-[#FFDD2B]/[0.2] hover:bg-transparent absolute z-[10] w-full h-full"
      ></div>
      <img
        style={{ clipPath: "inset(10% 12% 85% 83%)" }}
        className="absolute z-[5]"
        src={sourceImg}
        alt="cover image"
      />
    </div>
  );
};

export default HomeGal;
