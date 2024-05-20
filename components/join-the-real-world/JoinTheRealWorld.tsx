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
        <div className="my-8">
          <video controls poster="/tate.webp">
            <source
              src="https://firebasestorage.googleapis.com/v0/b/the-real-world-c1527.appspot.com/o/Welcome%20to%20The%20Real%20World.mp4?alt=media&token=61d54c5e-4796-4064-ae23-11291d316721"
              type="video/mp4"
            />
          </video>
        </div>
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
