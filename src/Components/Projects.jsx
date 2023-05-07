import React from "react";
import {
  MdDeck,
  MdQuiz,
  MdShoppingCart,
  MdMenuBook,
  MdFoodBank,
} from "react-icons/md";
import { AiFillProject } from "react-icons/ai";

const Projects = () => {
  const projects = [
    {
      child: (
        <>
          <MdDeck className="w-20 h-20 mx-auto " />
        </>
      ),
      title: "Tell-Us",
      description:
        "A Social Media Platform made in MERN Stack, Material-UI, uses Redux Toolkit for State management, Core features includes Post upload with or without Image using cloudinary, like, dislike, comment, search user, follow user.",
      liveLink: "https://tell-us-by-nawed.netlify.app",
      codeLink: "https://github.com/nawedrashid/Tell-Us_Frontend",
    },
    {
      child: (
        <>
          <MdQuiz className="w-20 h-20 mx-auto " />
        </>
      ),
      title: "Football Quiz",
      description:
        "A fun quiz app made in MERN Stack, Auth implementation with local storage using token and multiple topics to choose, feedback for right/wrong using green/red color, score update based on answer given and dashboard to show all scores",
      liveLink: "https://football-quiz-app.netlify.app",
      codeLink: "https://github.com/nawedrashid/Football-Quiz_Frontend",
    },
    {
      child: (
        <>
          <MdShoppingCart className="w-20 h-20 mx-auto " />
        </>
      ),
      title: "Furnishing Spot",
      description:
        "An E-Commerce Platform made in MERN Stack, TypeScript. Uses Redux Toolkit for State management, Core features includes product upload, cart management, Wishlist management, user and admin managment, order update in profile and delivery status.",
      liveLink: "",
      codeLink: "",
    },
    {
      child: (
        <>
          <MdMenuBook className="w-20 h-20 mx-auto " />
        </>
      ),
      title: "Book4U",
      description:
        "A Book App made in ReactJs as the frontend and NodeJs with Express as the backend and MongoDB as the database. It uses OAuth for the user authentication via Google for direct login using PassportJs as the Middleware ",
      liveLink: "",
      codeLink: "",
    },
    {
      child: (
        <>
          <MdFoodBank className="w-20 h-20 mx-auto " />
        </>
      ),
      title: "Meals",
      description:
        "An app for ordering food by giving address on checkout, Frontend made using ReactJs, Firebase is used as Backend. ",
      liveLink: "",
      codeLink: "",
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-grad1 to-grad2 w-full h-full pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray p-2 inline">
            Projects
          </p>
          <p className="py-6">These are the Projects that I have made.</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
          {projects.map(({ title, child, description, liveLink, codeLink }) => (
            <div className="shadow-md shadow-gray py-2 rounded-lg">
              <div>
                {child}
                <p className="font-bold text-2xl">{title}</p>
                <p className="my-4 mx-3">{description}</p>
              </div>
              <div className="flex flex-row">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className=" text-white w-1/2 px-6 py-3 my-2 mx-3 hover:scale-105 duration-200 flex items-center justify-center rounded-md bg-gradient-to-r from-btngrd1 to-btngrd2 font-semibold"
                >
                  <button>Live</button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className=" text-white w-1/2 px-6 py-3 my-2 mx-3 hover:scale-105 duration-200 flex items-center justify-center rounded-md bg-gradient-to-r from-btngrd3 to-btngrd4 font-semibold"
                  href={codeLink}
                >
                  <button>Code</button>
                </a>
              </div>
            </div>
          ))}
          <div className="shadow-md shadow-gray py-2 rounded-lg">
            <div>
              <AiFillProject className="w-20 h-20 mx-auto" />
              <p className="font-bold text-2xl">JavaScript Projects</p>
              <p className="my-4 mx-3">
                Here all the projects that are made by me using HTML, CSS and
                JavaScript DOM can be found.
              </p>
            </div>
            <div className="flex flex-row">
              <button
                //   onClick={(e) => {
                //     e.preventDefault();
                //     window.location.href = liveLink;
                //   }}
                className=" text-white w-full px-6 py-3 my-2 mx-4 hover:scale-105 duration-200 flex items-center justify-center rounded-md bg-gradient-to-r from-btngrd1 via-btngrd3 to-btngrd4 font-semibold"
              >
                Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
