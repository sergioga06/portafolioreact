import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const technologies = [
  { name: "Spring Boot", img: "/img/spring.jpg" },
  { name: "Bootstrap", img: "/img/Bootstrap.jpg" },
  { name: "React JS", img: "/img/react.png" },
  { name: "Angular", img: "/img/Angular.png" },
];

const Carrusel = () => {
  return (
    <div className="w-full">
      <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 text-center md:text-left">
        Tecnologías & Frameworks
      </h3>
      <div className="px-10">
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {technologies.map((tech) => (
              <CarouselItem key={tech.name} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/4">
                <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/50 p-4 transition-all hover:border-primary/50 hover:bg-primary/5">
                  <div className="aspect-square flex items-center justify-center">
                    <img 
                      src={tech.img} 
                      alt={tech.name} 
                      className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-110" 
                    />
                  </div>
                  <p className="text-[10px] text-center mt-2 font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
                    {tech.name}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-background/50 backdrop-blur-sm border-border" />
          <CarouselNext className="hidden md:flex -right-12 bg-background/50 backdrop-blur-sm border-border" />
        </Carousel>
      </div>
    </div>
  );
};

export default Carrusel;