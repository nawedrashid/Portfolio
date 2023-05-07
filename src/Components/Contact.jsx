import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const socials = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/md-nawed-rashid-550bb31b3",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/nawedrashid",
    },
    {
      id: 3,
      child: (
        <>
          <FaTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/rashidnawed",
    },
    {
      id: 4,
      child: (
        <>
          <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/nawedrashid/",
    },
  ];

  return (
    <div
      name="Contacts"
      className="bg-gradient-to-b from-grad1 to-grad2 w-full h-full text-white p-4 pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-screen h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray p-2 inline">
            Contact
          </p>
          <p className="py-6">Submit the form below to connect with me.</p>
        </div>

        <div className="flex justify-center items-center pr-4">
          <form
            action="https://getform.io/f/f376f1aa-dc2c-4681-980a-948689fd4cb1"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your messsage"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white font-bold bg-gradient-to-b from-btngrd1 to-btngrd2 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
              Let's Connect
            </button>
          </form>
        </div>
      </div>
        <div className="flex flex-col-4 gap-8 justify-center px-10 py-4">
                {socials.map(({id,href,child})=>(
                    <div className="hover:scale-110 duration-300">
                        <a href={href} target="_blank" rel="noreferrer">
                        {child}
                        </a>
                        </div>
                ))}
        </div>
    </div>
  );
};

export default Contact;
