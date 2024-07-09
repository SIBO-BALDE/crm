import React, { useState, useEffect, useRef } from 'react';

interface Slide {
  id: number;
  image: string;
  title: string;
//   description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dtquwiu3x/image/upload/v1688561810/photo4_yp31ve.jpg',
    title: 'First Slide',
    // description: 'This is the first slide',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dtquwiu3x/image/upload/v1717500938/baraka2_ffu4k5.jpg',
    title: 'Second Slide',
    // description: 'This is the second slide',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dtquwiu3x/image/upload/v1717500937/baraka1_mjauwy.jpg',
    title: 'Third Slide',
    // description: 'This is the third slide',
  },
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (currentSlide === totalSlides) {
      setCurrentSlide(1);
      if (slideRef.current) {
        slideRef.current.style.transition = 'none';
        slideRef.current.style.transform = 'translateX(0)';
        setTimeout(() => {
          if (slideRef.current) {
            slideRef.current.style.transition = 'transform 1s ease-in-out';
            setCurrentSlide(1);
          }
        }, 50);
      }
    } else {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  return (
    <div className="relative w-full h-97 overflow-hidden"> {/* Augmentez la hauteur ici */}
      <div
        ref={slideRef}
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${(currentSlide % (totalSlides + 1)) * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={slide.image} alt={slide.title} className="w-full h-67 object-cover" />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-xl">{slide.title}</h3>
              {/* <p>{slide.description}</p> */}
            </div>
          </div>
        ))}
        <div className="w-full flex-shrink-0">
          <img src={slides[0].image} alt={slides[0].title} className="w-full h-67 object-cover" />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
            <h3 className="text-xl">{slides[0].title}</h3>
            {/* <p>{slides[0].description}</p> */}
          </div>
        </div>
      </div>
      <button
        onClick={() => setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides : prevSlide - 1))}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-75 p-2"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-75 p-2"
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
