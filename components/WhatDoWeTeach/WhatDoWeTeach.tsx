import React from "react";
import Cards from "./Cards";

const lessons = [
  {
    title: "Learn All Digital Skills",
    subtitle: "The business models we teach are:",
    subImages: [
      {
        url: "https://www.therealworldportal.com/wp-content/uploads/copywriting-icon.webp",
        title: "Copywriting",
      },
      {
        url: "https://www.therealworldportal.com/wp-content/uploads/client-acquisition-icon.webp",
        title: "Client Acquisition",
      },
      {
        url: "https://www.therealworldportal.com/wp-content/uploads/e-commerce-icon.webp",
        title: "Ecommerce",
      },
      {
        url: "https://www.therealworldportal.com/wp-content/uploads/content-creation-icon.webp",
        title: "Content Creation",
      },
    ],
    points: [
      "Completely online",
      "Location independent",
      "Scalable to 7-figures or more",
      "Focused on new markets (AI)",
    ],
    mainImage:
      "https://www.therealworldportal.com/wp-content/uploads/learn-all-digital-skills.webp",
  },
  {
    title: "Proven Investment Strategies",
    subtitle: "As you begin to make money, we teach you how to MULTIPLY IT.",
    subtitle2:
      "Cutting edge strategies designed and catered to your personal risk and time preferences.",
    subImages: [
      {
        url: "https://www.therealworldportal.com/wp-content/uploads/business-mastery-icon.webp",
        title: "Analysis",
      },
      {
        url: "https://www.therealworldportal.com/wp-content/uploads/defi-icon.webp",
        title: "DeFi",
      },
    ],

    mainImage:
      "https://www.therealworldportal.com/wp-content/uploads/modern-market-strategies.webp",
  },
  {
    title: "Automate Your Business",
    subtitle:
      "The final step is teaching you how to scale your business and outsource so you make money while you sleep.",
    subImages: [
      {
        url: "https://www.therealworldportal.com/wp-content/uploads/markets-icon.webp",
        title: "Business & Finance",
      },
      {
        url: "https://www.therealworldportal.com/wp-content/uploads/mindset-icon.webp",
        title: "Mindset",
      },
    ],

    mainImage:
      "https://www.therealworldportal.com/wp-content/uploads/automate-your-business.webp",
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
