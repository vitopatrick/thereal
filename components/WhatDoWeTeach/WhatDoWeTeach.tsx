import React from "react";
import Cards from "./Cards";

const lessons = [
  {
    title: "Learn All Digital Skills",
    subtitle: "The business models we teach are:",
    subImages: [
      {
        url: "https://therealworldenrol.com/images/Copywriting.webp",
        title: "Copywriting",
      },
      {
        url: "https://therealworldenrol.com/images/freelancing_1.webp",
        title: "Freelancing",
      },
      {
        url: "https://therealworldenrol.com/images/Ecommerce.webp",
        title: "Ecommerce",
      },
      {
        url: "https://therealworldenrol.com/images/Artificial-Intelligence.webp",
        title: "Artificial Inteligence",
      },
    ],
    points: [
      "Completely online",
      "Location independent",
      "Scalable to 7-figures or more",
      "Focused on new markets (AI)",
    ],
    mainImage:
      "https://therealworldenrol.com/images/Choose-A-Skill-NEW-p-1080.png",
  },
  {
    title: "Proven Investment Strategies",
    subtitle: "As you begin to make money, we teach you how to MULTIPLY IT.",
    subtitle2:
      "Cutting edge strategies designed and catered to your personal risk and time preferences.",
    subImages: [
      {
        url: "https://therealworldenrol.com/images/Cryptocurrency.webp",
        title: "Analysis",
      },
      {
        url: "https://therealworldenrol.com/images/Stocks.webp",
        title: "Stocks",
      },
    ],

    mainImage: "https://therealworldenrol.com/images/Multiply-Your-Income.webp",
  },
  {
    title: "Automate Your Business",
    subtitle:
      "The final step is teaching you how to scale your business and outsource so you make money while you sleep.",
    subImages: [
      {
        url: "https://therealworldenrol.com/images/Business-_-Finance.webp",
        title: "Business & Finance",
      },
      {
        url: "https://therealworldenrol.com/images/Mindset.webp",
        title: "Mindset",
      },
    ],

    mainImage: "https://therealworldenrol.com/images/Scale-Your-Business.webp",
  },
];

export default function WhatDoWeTeach() {
  return (
    <div className="bg-white p-4 text-black">
      <div className="w-[90%] mx-auto">
        <h3 className="text-3xl lg:text-6xl font-bold text-center">
          What is The Real World?
        </h3>
        <div className="mt-6 space-y-6">
          {lessons.map((lesson) => (
            <Cards lesson={lesson} key={lesson.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
