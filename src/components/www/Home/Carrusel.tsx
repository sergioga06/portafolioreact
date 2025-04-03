import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Carrusel = () => {
  return (
    <div className="mt-6">
      <h3 className="text-md font-semibold mb-2">Tecnologías que conozco</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img src="/img/spring.jpg" alt="Spring" />
            </CarouselItem>
            <CarouselItem>
              <img src="/img/Bootstrap.jpg" alt="Bootstrap" />
            </CarouselItem>
            <CarouselItem>
              <img src="/img/react.png" alt="React" />
            </CarouselItem>
            <CarouselItem>
              <img src="/img/Angular.png" alt="Angular" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Carrusel;
