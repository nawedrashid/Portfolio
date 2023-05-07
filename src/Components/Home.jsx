import React from "react";
import ProfilePic from "../Assets/Profile.png";
import Resume from "../Assets/Nawed_Rashid_Resume.pdf";
import { BiRightArrow, BiDownload } from "react-icons/bi";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-grad1 via-head to-grad2 pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row sm:flex-col">
        <div className="flex flex-col items-center sm:items-start justify-center h-full">
          <p className="text-gray font-bold py-4 max-w-md">
            Welcome to my Portfolio. I'm <span className="text-2xl">Md Nawed Rashid</span>
          </p>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            A Full Stack Developer
          </h2>
          <p className="text-gray py-4 max-w-md">
            Looking to secure a challenging position in a reputable organisation
            where I can utilize my knowledge and skills in writing clean codes
            to contribute towards the company's growth, while also enhancing my
            professional development and achieving career advancement
          </p>
          <div className="flex flex-row justify-center sm:justify-start">
            <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-btngrd1 to-btngrd2 font-semibold">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <BiRightArrow className="mx-1" />
              </span>
            </button>
            <a href={Resume} target="_blank" rel="noreferrer" download={true}>
              <button className=" group text-white w-fit px-6 py-3 my-2 mx-3 flex items-center rounded-md bg-gradient-to-r from-btngrd3 to-btngrd4 font-semibold">
                Resume
                <span className="group-hover:scale-105 duration-300">
                  <BiDownload className="mx-1" />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={ProfilePic}
            alt="my Profile pic"
            className="rounded-full px-5 mx-auto md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
