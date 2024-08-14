import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const images = [
  "https://www.therealworldportal.com/wp-content/uploads/main-testimonial-4.webp",
  "https://www.therealworldportal.com/wp-content/uploads/main-testimonial-5.webp",
  "https://www.therealworldportal.com/wp-content/uploads/main-testimonial-6.webp",
  "https://www.therealworldportal.com/wp-content/uploads/main-testimonial-7.webp",
  "https://www.therealworldportal.com/wp-content/uploads/main-testimonial-8.webp",
  "https://www.therealworldportal.com/wp-content/uploads/main-testimonial-9.webp",
  "https://www.therealworldportal.com/wp-content/uploads/main-testimonial-10.webp",
];

export default function CarouselPictures() {
  return (
    <Carousel className="w-[80%] lg:w-[70%] mx-auto my-10 ">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="pl-1 md:basis-1/2 lg:basis-1/3 lg:mx-2 "
          >
            <img src={image} alt={index.toString()} className="rounded-3xl" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-orange-500" />
      <CarouselNext className="bg-orange-500" />
    </Carousel>
  );
}
