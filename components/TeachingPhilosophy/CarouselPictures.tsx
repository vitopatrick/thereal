import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const images = [
  "https://therealworldenrol.com/images/13-gigapixel-art-scale-2_00x.webp",
  "https://therealworldenrol.com/images/14-gigapixel-art-scale-2_00x.webp",
  "https://therealworldenrol.com/images/15-gigapixel-art-scale-2_00x.webp",
  "https://therealworldenrol.com/images/13-gigapixel-art-scale-2_00x.webp",
  "https://therealworldenrol.com/images/17-gigapixel-art-scale-2_00x.webp",
  "https://therealworldenrol.com/images/18-gigapixel-art-scale-2_00x.webp",
  "https://therealworldenrol.com/images/16-gigapixel-art-scale-2_00x.webp",
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
