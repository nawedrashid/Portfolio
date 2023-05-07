import React from "react";
import LTIMindtree from "../Assets/LTIMindtree.png";

const Experience = () => {
  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-grad2 to-grad1 w-full h-full pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-screen h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray p-2 inline">
            Experience
          </p>
          <p className="py-6">My work experience till now.</p>
        </div>
        <div className="w-full grid grid-cols-1 gap-8 text-center py-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray py-2 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:justify-between items-center justify-center">
              <img
                className="h-1/2 w-1/2 px-3 py-3 rounded-full"
                src={LTIMindtree}
                alt="LTIMindtree"
              />
              <div className="px-10 sm:py-3 flex flex-col justify-center">
                <p className="font-bold sm:py-3 text-xl">
                  LTIMindtree - Data Engineer
                </p>
                <p className="font-bold sm:py-3 text-xl">August 2022 - Present</p>
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <p className="my-3 mx-10 font-semibold">
                Tech Stack - SQL, Python, Talend, Tableau, Abinitio
              </p>
              <p className="my-3 mx-10 font-semibold">Roles and Responsibility</p>
              <p className="mb-5">- Extract the data from different external sources and cleansing the data and load into target DW. <br/>
                - Designed jobs using various Talend components.<br/>
                - Running sub jobs in parallel, used parallelize component and multi thread execution. <br/>
                - Working on Performance tuning Technique. <br/>
                - Working on error handling techniques and turning the ETL flow for better performance.<br/>
                - Actively participating in daily, weekly, and monthly meetings with team. <br/>
                - Experience in developing job Design using different talend components.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
