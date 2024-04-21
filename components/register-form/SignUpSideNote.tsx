import React from 'react'

const sidenotes = [
  "Live calls and AMAs with Experts",
  "24/7 Support and on-demand guidance",
  "Over 18 Modern Wealth Creation Methods",
  "7+ Distinct Campuses",
  "1000+ Professionally made Video lessons",
];

export default function SignUpSideNote() {
  return (
    <div className="flex-1 lg:flex items-center flex-col space-y-6 hidden">
      {/* image */}
      <div className="p-4 flex items-center justify-center">
        <img src="/global2.svg" alt="the globe" />
      </div>
      <h4 className="font-bold text-3xl text-center">UNLOCK ACCESS TO...</h4>
      <div className="space-y-4">
        {sidenotes.map((notes) => (
          <div key={notes} className="flex items-center gap-2">
            <img src="/good.svg" alt="tick" className="w-[5%]" />
            <p className="text-lg">{notes}</p>
          </div>
        ))}
      </div>
      <h4 className="font-semibold text-xl">
        An active community of like-minded,
        <br />
        wealth-focused individuals.
      </h4>
    </div>
  );
}
