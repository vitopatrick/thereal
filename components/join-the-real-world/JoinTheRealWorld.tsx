import Link from "next/link";
import React from "react";

export default function JoinTheRealWorld() {
  return (
    <section className="my-8">
      {/* container */}
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center p-4">
        <div className="flex justify-center gap-4">
          <div className=" space-y-4">
            <h3 className="text-4xl lg:text-6xl font-extrabold lg:ml-6">
              Join <span className="text-orange-400">The Real World</span>
            </h3>
            <p className="text-2xl lg:text-3xl">
              Money making is an addicting formula when you learn <br /> from
              our professionally trained millionaire professors.
            </p>
          </div>
          <div className="w-[10%] hidden lg:block">
            <img
              src="https://therealworldenrol.com/images/arrow-1.png"
              alt="the real world"
            />
          </div>
        </div>
        {/* image */}
        {/* <div className="my-8">
          <iframe
            width="957"
            height="551"
            src="https://www.youtube.com/embed/oLl3C52XCzo"
            title="The Real World"
            // className="absolute w-full h-full left-0 top-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div> */}
        {/* join now button */}
        <Link
          href="/register"
          className="bg-orange-500 p-4 rounded-full font-extrabold text-black text-2xl"
        >
          JOIN NOW
        </Link>
      </div>
    </section>
  );
}
