import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";

const faq = [
  {
    question: "Is this program suitable for women?",
    ans: "THE REAL WORLD is suitable for any person, regardless of gender, who aspire to learn.THE REAL WORLD has a very large female membership base and have made some of our greatest success stories!",
  },
  {
    question: "How quickly will I make my money back?",
    ans: "It depends on how seriously you take The Real World. But many students made their money back in a couple of weeks. Note: Everything taught within The Real World is for education purposes only.It is up to each student to implement and do the work. The Real World team doesn’t guarantee any profits or financial success.",
  },
  {
    question: "Do I need money once I’m inside TRW?",
    ans: "Not necessarily.Once inside The Real World, many of our students chose copywriting and freelancing, which are businesses without money requirements, and saw great success.",
  },
  {
    question: "Does my age really not matter?",
    ans: "No, but we encourage anyone under the age of 18 to consult a parent or guardian before signing up for TRW.Instead of getting the newest videogames just to find them boring in a week, you can join our community, start your business and shock your friends and family by becoming the kid who’s leveling up in real life.",
  },
  {
    question: "I know nothing about the skills you teach. Is it a problem?",
    ans: "Of course not. This is a mentoring program, and you are here to learn from us.  Just follow our step-by-step lessons and guidance, and you will start a profitable business.",
  },
  {
    question: "I don’t have a lot of time available, can I still apply?",
    ans: "The methods we teach are designed for rapid execution. So all you need is a minimum of 30 minutes a day to listen to your professors and apply what you’ve learned.",
  },
  {
    question: "I live in X country. Is it a problem?",
    ans: "Not at all. At The Real World, we teach how to make money, so it doesn’t matter where you are.  Your location will only change the currency of your earnings.",
  },
  {
    question: "Still have questions?",
    ans: "Click the orange circle on the bottom right of your screen. Ask anything about The Real World to the Live Chat.",
  },
];

export default function Faq() {
  return (
    <div className="p-4">
      <h3 className="text-2xl lg:text-5xl font-bold text-center">
        FREQUENTLY ASKED QUESTIONS
      </h3>
      {/* questions */}
      <div className="lg:mx-auto lg:w-2/4 mt-5">
        <Accordion type="single" collapsible className="w-full">
          {faq.map((f, index) => (
            <AccordionItem value={index.toString()} key={f.question}>
              <AccordionTrigger>{f.question}</AccordionTrigger>
              <AccordionContent className="p-5">{f.ans}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="flex items-center justify-center flex-col gap-3 mt-4">
        <button className="border-[3px] border-orange-500 bg-orange-300/20 p-4">
          <Link href="/register" className="font-bold text-2xl tracking-wide">
            JOIN THE REAL WORLD
          </Link>
        </button>
        <p>
          {" "}
          <span className="font-bold">Access 12+ </span>wealth creation methods
        </p>
      </div>
    </div>
  );
}
