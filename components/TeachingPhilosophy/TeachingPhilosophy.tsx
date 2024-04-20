import React from "react";

export default function TeachingPhilosophy() {
  return (
    <section className="my-8">
      <main className="flex w-[90%] mx-auto gap-[5%] flex-col lg:flex-row justify-betweeen">
        <div className="mb-6 lg:mb-0">
          <h4 className="font-extrabold text-4xl lg:text-5xl ">
            Our Teaching <br /> Philosophy
          </h4>
          <img
            src="https://therealworldenrol.com/images/Gradient-Underline-1.webp"
            alt="underline"
          />
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
    </section>
  );
}
