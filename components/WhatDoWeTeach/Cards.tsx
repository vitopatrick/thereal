export default function Cards({ lesson }: any) {
  return (
    <div className="bg-neutral-300/30 p-4 rounded-xl grid grid-cols-1 lg:grid-cols-2">
      <div className="space-y-4">
        <h3 className="text-2xl lg:text-4xl font-bold border-b-[1.5px] border-orange-400 pb-5">
          {lesson.title}
        </h3>
        <p className="text-lg lg:text-xl">{lesson.subtitle}</p>
        <p className="text-lg lg:text-xl">{lesson.subtitle2}</p>
        <ul className="space-y-4 list-disc pl-6">
          {lesson.points &&
            lesson.points.map((point: any) => (
              <li className="text-xl font-semibold" key={point}>
                {point}
              </li>
            ))}
        </ul>
        <div className=" grid grid-cols-2 w-[300px] gap-3 p-3">
          {lesson.subImages.map((images: any) => (
            <div
              key={images.title}
              className="bg-stone-900 rounded-2xl flex flex-col items-center justify-center p-2 shadow-lg"
            >
              <img src={images.url} alt={images.title} className="w-1/2" />
              <p className="text-white text-center">{images.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src={lesson.mainImage} alt={lesson.title} />
      </div>
    </div>
  );
}
