import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    rating: 5,
    content: "PlanO has been a total game-changer for my daughter. She tried watercolor painting for the first time and now spends hours creating beautiful art. I love how the platform blends structure with creativity.",
    author: "Aarti M",
    location: "Mumbai, India",
    avatar: "/lovable-uploads/5ac3f149-44a9-47d8-8b8c-af0cd7aa9a24.png",
  },
  {
    id: 2,
    rating: 5,
    content: "PlanO has been a total game-changer for my daughter. She tried watercolor painting for the first time and now spends hours creating beautiful art. I love how the platform blends structure with creativity.",
    author: "Aarti M",
    location: "Mumbai, India", 
    avatar: "/lovable-uploads/5ac3f149-44a9-47d8-8b8c-af0cd7aa9a24.png",
  },
  {
    id: 3,
    rating: 5,
    content: "PlanO has been a total game-changer for my daughter. She tried watercolor painting for the first time and now spends hours creating beautiful art. I love how the platform blends structure with creativity.",
    author: "Aarti M",
    location: "Mumbai, India",
    avatar: "/lovable-uploads/5ac3f149-44a9-47d8-8b8c-af0cd7aa9a24.png", 
  },
  {
    id: 4,
    rating: 5, 
    content: "PlanO has been a total game-changer for my daughter. She tried watercolor painting for the first time and now spends hours creating beautiful art. I love how the platform blends structure with creativity.",
    author: "Aarti M",
    location: "Mumbai, India",
    avatar: "/lovable-uploads/5ac3f149-44a9-47d8-8b8c-af0cd7aa9a24.png",
  },
  {
    id: 5,
    rating: 4,
    content: "PlanO has been a total game-changer for my daughter. She tried watercolor painting for the first time and now spends hours creating beautiful art. I love how the platform blends structure with creativity.",
    author: "Aarti M",
    location: "Mumbai, India",
    avatar: "/lovable-uploads/5ac3f149-44a9-47d8-8b8c-af0cd7aa9a24.png",
  },
];

const TestimonialCarousel = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [allTestimonials, setAllTestimonials] = useState([]);
  const isAdjustingScroll = useRef(false);

  useEffect(() => {
    const repeatCount = 10; // More repetitions for longer scroll range
    const repeatedTestimonials = [];
    for (let i = 0; i < repeatCount; i++) {
        repeatedTestimonials.push(...testimonials);
    }
    setAllTestimonials(repeatedTestimonials);
  }, []);


  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  const getCardWidth = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 312;
      if (window.innerWidth >= 768) return 400;
      return 300;
    }
    return 400;
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: -containerWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: containerWidth / 2,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current || isDragging || isAdjustingScroll.current) return;

      const container = scrollContainerRef.current;
      const containerWidth = container.clientWidth;
      const scrollWidth = container.scrollWidth;
      const cardWidth = getCardWidth();
      const totalCards = allTestimonials.length;

      const threshold = cardWidth * testimonials.length;

      if (container.scrollLeft < threshold) {
        isAdjustingScroll.current = true;
        container.scrollLeft += cardWidth * testimonials.length * 5;
        setTimeout(() => {
          isAdjustingScroll.current = false;
        }, 100);
      } else if (container.scrollLeft + containerWidth > scrollWidth - threshold) {
        isAdjustingScroll.current = true;
        container.scrollLeft -= cardWidth * testimonials.length * 5;
        setTimeout(() => {
          isAdjustingScroll.current = false;
        }, 100);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
        container.addEventListener("scroll", handleScroll);

        requestAnimationFrame(() => {
          const initialOffset = getCardWidth() * testimonials.length * 5;
          container.scrollLeft = initialOffset;
        });

        return () => container.removeEventListener("scroll", handleScroll);
    }

  }, [isDragging, allTestimonials]);

  return (
    <div className="hidden md:block relative w-full max-w-full overflow-hidden py-16">
        <div className="flex flex-col items-center mb-10">
            <h2 className="poppins-bold text-[48px] leading-[110%] tracking-normal text-center align-bottom">
                <span className="text-gray-800">Hear from </span>
                <span className="text-[#2643A2]">our users!</span>
            </h2>
        </div>

        {/* Left Arrow */}
        <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2 hover:cursor-pointer">    
            <button
                onClick={handleScrollLeft}
                className="h-16 w-16 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all flex items-center justify-center"
                aria-label="Previous testimonial"
            >
                <ArrowLeft className="w-6 h-6" />
            </button>
        </div>

        {/* Right Arrow */}
        <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2 hover:cursor-pointer">
            <button
                onClick={handleScrollRight}
                className="h-16 w-16 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all flex items-center justify-center"
                aria-label="Next testimonial"
            >
                <ArrowRight className="w-6 h-6" />
            </button>
        </div>

        <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-[1]" />

        <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory px-8 pb-4 relative scroll-smooth gap-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {allTestimonials.map((testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="snap-center py-8">
                    <TestimonialCard testimonial={testimonial} />
                </div>
            ))}
        </div>

        <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-[1]" />
    </div>
  );
};

export default TestimonialCarousel;