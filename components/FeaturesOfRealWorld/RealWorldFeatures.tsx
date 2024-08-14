import React from "react";

export default function RealWorldFeatures() {
  return (
    <div className="bg-white  text-black p-5">
      {/* container */}
      <div className="w-[90%] mx-auto">
        <h4 className="text-center font-bold text-3xl lg:text-5xl">
          What Do I Get Access to?
        </h4>
        {/* first */}
        <div className="p-[10%] lg:p-[5%] gap-8 flex flex-col lg:flex-row items-center justify-evenly border-4 rounded-xl border-orange-400 my-3">
          <div>
            <h3 className="font-bold text-3xl lg:text-4xl">
              Step by Step Blueprint
            </h3>
            <ul className="list-disc space-y-4 mt-4 text-xl">
              <li>
                {" "}
                <span className="font-bold">Easy-to-follow program</span> for
                financial success
              </li>
              <li>
                Quickly learn{" "}
                <span className="font-bold">high income skills</span>
              </li>
              <li>
                Secrets of how the wealthy{" "}
                <span className="font-bold"> manage money</span>
              </li>
              <li>
                Scale from{" "}
                <span className="font-bold"> Zero to $1 million </span>as fast
                as possible
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://www.therealworldportal.com/wp-content/uploads/gamifying-business-mastery.webp"
              alt="the first image"
            />
          </div>
        </div>
        {/* second */}
        <div className="p-[10%] lg:p-[5%] gap-8 flex flex-col lg:flex-row items-center justify-evenly border-4 rounded-xl border-orange-400 my-3">
          <div>
            <h3 className="font-bold text-3xl lg:text-4xl">
              Private Network & Community
            </h3>
            <ul className="list-disc space-y-4 mt-4 text-xl">
              <li>Network with 200,000+ people on the same mission</li>
              <li>Learn from real world results and examples</li>
              <li>Make like-minded friends on your financial journey</li>
              <li>Celebrate your wins with people who will understand</li>
            </ul>
          </div>
          <div className="lg:w-[40%]">
            <img
              src="https://www.therealworldportal.com/wp-content/uploads/leveling-up-together.webp"
              alt="the first image"
            />
          </div>
        </div>
        {/* third */}
        <div className="p-[10%] lg:p-[5%] gap-8 flex flex-col lg:flex-row items-center justify-evenly border-4 rounded-xl border-orange-400 my-3">
          <div>
            <h3 className="font-bold text-3xl lg:text-4xl">
              Multimillionaires in Your Pocket
            </h3>
            <ul className="list-disc space-y-4 mt-4 text-xl">
              <li>Professors will lay out a plan that works for YOU</li>
              <li>You'll be mentored every step of your journey</li>
              <li>1-on-1 communication and advice from industry experts</li>
              <li>Get access to opportunities only available in TRW</li>
            </ul>
          </div>
          <div className="lg:w-[30%]">
            <img
              src="https://www.therealworldportal.com/wp-content/uploads/the-real-world-professors.webp"
              alt="the last image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
