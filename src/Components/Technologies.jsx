import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiMui,
  SiExpress,
} from "react-icons/si";

const Technologies = () => {
  const techList = [
    {
      id: 1,
      child: (
        <>
          <FaHtml5 className="w-20 h-20 mx-auto " />
        </>
      ),
      title: "HTML",
    },
    {
      id: 2,
      child: (
        <>
          <FaCss3 className="w-20 h-20 mx-auto " />
        </>
      ),
      title: "CSS",
    },
    {
      id: 3,
      child: (
        <>
          <FaJsSquare className="w-20 h-20 mx-auto " />
        </>
      ),
      title: "JavaScript",
    },
    {
      id: 4,
      child: (
        <>
          <FaReact className="w-20 h-20 mx-auto " />
        </>
      ),
      title: "ReactJs",
    },
    {
      id: 5,
      child: (
        <>
          <SiNextdotjs className="w-20 h-20 mx-auto " />
        </>
      ),
      title: "NextJs",
    },
    {
      id: 6,
      child: (
        <>
          <SiTypescript className="w-20 h-20 mx-auto " />
        </>
      ),
      title: "TypeScript",
    },
    {
      id: 7,
      child: (
        <>
          <FaNodeJs className="w-20 h-20 mx-auto " />
        </>
      ),
      title: "Node",
    },
    {
      id: 8,
      child: (
        <>
          <SiExpress className="w-20 h-20 mx-auto " />
        </>
      ),
      title: "ExpressJs",
    },
    {
      id: 9,
      child: (
        <>
          <SiMongodb className="w-20 h-20 mx-auto " />
        </>
      ),
      title: "MongoDB",
    },
    {
      id: 10,
      child: (
        <>
          <SiTailwindcss className="w-20 h-20 mx-auto " />
        </>
      ),
      title: "Tailwind CSS",
    },
    {
      id: 11,
      child: (
        <>
          <SiMui className="w-20 h-20 mx-auto " />
        </>
      ),
      title: "Material UI",
    },
    {
      id: 12,
      child: (
        <>
          <FaGithub className="w-20 h-20 mx-auto " />
        </>
      ),
      title: "GitHub",
    },
  ];

  return (
    <div
      name="Technologies"
      className="bg-gradient-to-b from-grad2 to-grad1 w-full h-full sm:h-full pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-screen h-full sm:h-screen text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray p-2 inline">
            Technologies
          </p>
          <p className="py-6">These are the technologies I've worked with.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techList.map(({ id, child, title }) => (
            <div
              key={id}
              className="shadow-md shadow-gray hover:scale-105 duration-500 py-2 rounded-lg"
            >
              {child}
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
