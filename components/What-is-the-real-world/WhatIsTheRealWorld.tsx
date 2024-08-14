import Link from "next/link";
import React from "react";

export default function WhatIsTheRealWorld() {
  return (
    <div>
      <div className="w-[90%] mx-auto p-3 grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <div className="space-y-6">
          <h3 className="text-3xl lg:text-6xl font-bold">
            What is The Real World?
          </h3>
          <p className="text-xl lg:text-2xl">
            The Real World is a{" "}
            <span className="text-orange-500">global community</span> of
            like-minded individuals on a mission to become wealthy.
          </p>
          <p className="text-xl lg:text-2xl">
            Every member receives{" "}
            <span className="text-orange-500">
              {" "}
              advanced training and mentoring
            </span>{" "}
            from our team of millionaire industry specialists.
          </p>
          <p className="text-xl lg:text-2xl">
            We've successfully transformed thousands of lives through our
            <span className="text-orange-500">
              money-focused, unique education system.
            </span>
          </p>
          <Link
            href="/register"
            className="inline-block bg-orange-600 rounded-full font-bold text-black px-6 py-3 text-xl lg:text-3xl"
          >
            JOIN NOW
          </Link>
          <p className="text-neutral-500">
            Note: The Real World is an educational platform.
            <br /> Profits and success are not guaranteed. It's up to you to do
            to the work.
          </p>
        </div>
        <div>
          <img
            src="https://www.therealworldportal.com/wp-content/uploads/andrew-tate-bugatti.webp"
            alt="what is the real world"
            className="border-[4px] rounded-xl border-white"
          />
        </div>
      </div>
    </div>
  );
}
