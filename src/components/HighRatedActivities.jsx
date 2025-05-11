import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import HighRatedProviderCard from "./HighRatedProviderCard";

const activities = [
    { id: 1, title: "Music", image: "/music.svg" },
    { id: 2, title: "Chess", image: "/chess.svg" },
    { id: 3, title: "Skating", image: "/skating.svg" },
    { id: 4, title: "Sculpting", image: "/sculpting.svg" },
    { id: 5, title: "Painting", image: "/painting.svg" },
    { id: 6, title: "Painting", image: "/painting.svg" },  
];

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

const HighRatedActivities = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [allActivities, setAllActivities] = useState([]);
  const isAdjustingScroll = useRef(false);

  useEffect(() => {
    const repeatCount = 10; // More repetitions for longer scroll range
    const repeatedActivities = [];
    for (let i = 0; i < repeatCount; i++) {
        repeatedActivities.push(...activities);
    }
    setAllActivities(repeatedActivities);
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
      if (window.innerWidth >= 1024) return 335;
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
      const totalCards = allActivities.length;

      const threshold = cardWidth * activities.length;

      if (container.scrollLeft < threshold) {
        isAdjustingScroll.current = true;
        container.scrollLeft += cardWidth * activities.length * 5;
        setTimeout(() => {
          isAdjustingScroll.current = false;
        }, 100);
      } else if (container.scrollLeft + containerWidth > scrollWidth - threshold) {
        isAdjustingScroll.current = true;
        container.scrollLeft -= cardWidth * activities.length * 5;
        setTimeout(() => {
          isAdjustingScroll.current = false;
        }, 100);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
        container.addEventListener("scroll", handleScroll);

        requestAnimationFrame(() => {
          const initialOffset = getCardWidth() * activities.length * 5;
          container.scrollLeft = initialOffset;
        });

        return () => container.removeEventListener("scroll", handleScroll);
    }

  }, [isDragging, allActivities]);

return (
    <>
      {/* Desktop */}
      <div className="relative w-full max-w-full overflow-hidden py-16">
          <div className="flex flex-row justify-between items-center mb-3 px-3 md:px-12">
              <h2 className="poppins-bold text-[24px] md:text-[32px] lg:text-[42px] leading-[110%] tracking-normal align-bottom">
                Highly rated activity providers in your area
              </h2>
              <p className="hidden md:block poppins-semibold text-[20px] text-[#0D53E0] hover:cursor-pointer z-20">View All</p>
          </div>

          {/* Left Arrow */}
          <div className="hidden md:block absolute left-4 top-1/2 z-20 -translate-y-1/2 hover:cursor-pointer ">    
                  <button
                          onClick={handleScrollLeft}
                          className="h-16 w-16 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all flex items-center justify-center"
                          aria-label="Previous testimonial"
                  >
                          <ArrowLeft className="w-6 h-6" />
                  </button>
          </div>

          {/* Right Arrow */}
          <div className="hidden md:block absolute right-4 top-1/2 z-20 -translate-y-1/2 hover:cursor-pointer">
            <button
              onClick={handleScrollRight}
              className="h-16 w-16 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          <div className="hidden md:block absolute left-0 top-0 w-30 h-full bg-gradient-to-r from-white/60 to-transparent z-[1]" />

          <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory px-8 relative scroll-smooth gap-6"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
          >
              {allActivities.map((activity, index) => (
                  <div key={`${activity.id}-${index}`} className="snap-center py-8">
                      <HighRatedProviderCard activity={activity} />
                  </div>
              ))}
          </div>
          
          <p className="md:hidden block poppins-semibold text-[14px] text-[#0D53E0] hover:cursor-pointer z-20 text-right px-6">View All</p>

          <div className="hidden md:block absolute right-0 top-0 w-30 h-full bg-gradient-to-l from-white/60 to-transparent z-[1]" />
      </div>

      {/* Mobile */}
      {/* <div className="block md:hidden relative w-full max-w-full overflow-hidden py-8 px-3 ">
          <div className="relative w-full max-w-full overflow-hidden py-8 px-3 rounded-2xl border border-[#E4E8F4] shadow-[0_4px_32px_0_#00000014] bg-white">
              <h1 className="poppins-semibold text-[#06241B] text-[22px] leading-[110%] capitalize text-center mb-6">
                  Rec ommended<br/> activities for your child
              </h1>
              
              <div className="grid grid-cols-2 gap-4">
                  {activities.map((activity) => (
                      <div 
                          key={activity.id}
                          className="relative w-full aspect-square rounded-[20px] overflow-hidden hover:cursor-pointer"
                          style={{
                              backgroundImage: `url(${activity.image})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                          }}
                      >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent">
                              <div className="absolute bottom-6 text-center w-full">
                                  <h3 className="text-white text-[16px] poppins-semibold">{activity.title}</h3>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>

              <p className="text-[14px] text-[#0D53E0] poppins-semibold hover:cursor-pointer text-center mt-6">
                  View All
              </p>
          </div>
      </div> */}
    </>
);
};

export default HighRatedActivities;
