import React from "react";
import CarouselPictures from "./CarouselPictures";
import Link from "next/link";

export default function TeachingPhilosophy() {
  return (
    <section className="my-8" id="philosophy">
      <main className="flex w-[90%] mx-auto gap-[5%] flex-col lg:flex-row justify-betweeen">
        <div className="mb-6 lg:mb-0">
          <h4 className="font-extrabold text-4xl lg:text-5xl ">
            Our Teaching <br /> Philosophy
          </h4>
        </div>
        <div className="w-full flex-1 ml-4">
          <ul className="list-disc space-y-4 ">
            <li className="text-lg lg:text-2xl">
              Learn around{" "}
              <span className="text-orange-500">like-minded people</span>, and
              from <span className="text-orange-500">like-minded mentors.</span>
            </li>
            <li className="text-lg lg:text-2xl">
              Teaching how to{" "}
              <span className="text-orange-500">make money through action</span>{" "}
              , not a textbook.
            </li>
            <li className="text-lg lg:text-2xl">
              Get our students making money{" "}
              <span className="text-orange-500">as quickly as possible</span> .
            </li>
          </ul>
        </div>
      </main>
      {/* carousel */}
      <CarouselPictures />
      <div className="w-11/12 mx-auto flex flex-col items-center gap-4 my-4">
        <Link
          href="/register"
          className="bg-orange-500 p-4 rounded-full font-extrabold text-black text-2xl block text-center w-fit"
        >
          JOIN NOW
        </Link>
        <div>
          <p className="text-center text-neutral-400">
            Note: The Real World is an educational platform. Profits and success
            are not guaranteed. It's up to you to do to the work.
          </p>
        </div>
      </div>
    </section>
  );
}
