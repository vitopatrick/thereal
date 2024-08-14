const results = [
  {
    text: "We've built an ever-accessible portal to fully escape. Our own custom application. Available on every computer, phone or tablet",
    img: "https://www.therealworldportal.com/wp-content/uploads/the-real-world-app-400.webp",
  },
  {
    text: "Inside The Real World you will be surrounded by over 200,000 financially ambitious and health focused individuals.",
    img: "https://www.therealworldportal.com/wp-content/uploads/200k-students-400.webp",
  },
  {
    text: "Our community and mentorship program will equip you with all the resources needed to reach your financial goals.",
    img: "https://www.therealworldportal.com/wp-content/uploads/luxury-lifestyle-400.webp",
  },
];

export default function GetRealResults() {
  return (
    <div className="bg-white text-black relative">
      <div className="w-[90%] mx-auto p-3 space-y-4">
        <h3 className="text-2xl lg:text-5xl font-bold text-center">
          Get Real Results
        </h3>
        <p className="text-xl lg:text-2xl lg:w-[60%] mx-auto text-center">
          If you genuinely{" "}
          <span className="font-semibold">give your 100% effort</span> and don't
          AT LEAST make your money back... Then quit. You can cancel at any
          time.
        </p>
        <p className="text-xl lg:text-2xl lg:w-[60%] mx-auto text-center">
          That's why we're priced at a{" "}
          <span className="font-semibold">fraction of the cost</span> of regular
          educational institutions. The difference? You don't have to wait 4
          years to get a degree and look for a job...
        </p>
        <p className="text-xl lg:text-2xl lg:w-[60%] mx-auto text-center">
          You <span className="font-semibold"> MAKE MONEY as you LEARN</span>.
          We give you the real secrets to financial independence. If you ALREADY
          knew them, you wouldn't be on this page.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-5">
          {results.map((result) => (
            <div key={result.img} className="space-y-4">
              <div>
                <img
                  src={result.img}
                  alt={result.img}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="lg:w-3/4">
                <p className="text-xl">{result.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex justify-between relative">
        <img
          src="https://therealworldenrol.com/images/horse-single-1-1.webp"
          alt="image"
          className="w-1/2"
        />
        <img
          src="https://therealworldenrol.com/images/horse-single-1-1.webp"
          alt="image"
          className=""
        />
      </div> */}
    </div>
  );
}
