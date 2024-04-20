"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  {
    id: 1,
    url: "/philosophy",
    title: "Philosophy",
  },
  {
    id: 2,
    url: "/skills",
    title: "Skills",
  },
  {
    id: 3,
    url: "/access",
    title: "Access",
  },
  {
    id: 4,
    url: "/results",
    title: "Results",
  },
];

export default function Navbar() {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      <nav>
        {/* container */}
        <div className="lg:w-[80%] mx-auto p-3 flex justify-between gap-3 items-center">
          <div className=" flex-1 lg:flex justify-evenly items-center hidden">
            <Link
              href="/register"
              className="bg-orange-500 rounded-full text-black font-extrabold py-3 px-5 "
            >
              JOIN NOW
            </Link>
            <Link href="/philosophy" className="font-bold text-xl">
              Philosophy
            </Link>
            <Link href="/skills" className="font-bold text-xl">
              Skills
            </Link>
          </div>
          {/* Logo */}
          <Link href="/" className=" w-[15%]">
            <img
              src="https://therealworldenrol.com/images/Mask-group-1_1Mask-group-1.webp"
              alt="image"
            />
          </Link>
          {/*  other links */}
          <div className="lg:flex  items-center justify-evenly flex-1 hidden">
            <Link href="/access" className="font-bold text-xl">
              Access
            </Link>
            <Link href="/results" className="font-bold text-xl">
              Results
            </Link>
            <Link
              href="/login"
              className="rounded-full py-3 px-5 border font-bold border-white"
            >
              LOG IN
            </Link>
          </div>
          <button className="block lg:hidden" onClick={toggle}>
            <Menu />
          </button>
        </div>
      </nav>
      {/* mobile Navigation */}
      <div
        className={
          active
            ? "bg-stone-800 flex flex-col items-end gap-4 p-4 lg:hidden"
            : "hidden"
        }
      >
        {links.map((link) => (
          <Link
            href={link.url}
            className="font-semibold text-2xl"
            key={link.id}
          >
            {link.title}
          </Link>
        ))}
        <Link
          href="/register"
          className="bg-orange-500 rounded-full text-black font-extrabold text-xl py-3 px-5 "
        >
          JOIN NOW
        </Link>
        <Link
          href="/login"
          className="rounded-full py-3 px-5 border font-bold border-white text-xl"
        >
          LOG IN
        </Link>
      </div>
    </>
  );
}
