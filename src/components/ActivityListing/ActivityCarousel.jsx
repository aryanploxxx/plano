import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ActivityCard from "./ActivityCard";

const activities = [
    {
        id: 1,
        activity: "Dancing"
    },
    {
        id: 2,
        activity: "Skating"
    },
    {
        id: 3,
        activity: "Music"
    },
    {
        id: 4,
        activity: "Nature Exploration"
    },
    {
        id: 5,
        activity: "Art & Craft"
    }
];

const ActivityCarousel = () => {
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
      if (window.innerWidth >= 1024) return 120;
      if (window.innerWidth >= 768) return 400;
      return 72;
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
    <div className="relative w-full max-w-full overflow-hidden">
        {/* Left Arrow */}
        <div className="absolute left-4 top-1/2 z-10 -translate-y-2/3 hover:cursor-pointer">    
            <button
                onClick={handleScrollLeft}
                className="h-6 md:h-12 w-6 md:w-12 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all flex items-center justify-center"
                aria-label="Previous testimonial"
            >
                <ArrowLeft className="w-3 h-3 md:w-6 md:h-6" />
            </button>
        </div>

        {/* Right Arrow */}
        <div className="absolute right-4 top-1/2 z-10 -translate-y-2/3 hover:cursor-pointer">
            <button
                onClick={handleScrollRight}
                className="h-6 md:h-12 w-6 md:w-12 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all flex items-center justify-center"
                aria-label="Next testimonial"
            >
                <ArrowRight className="w-3 h-3 md:w-6 md:h-6"/>
            </button>
        </div>

        <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-[1]" />

        <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory px-8 pb-4 relative scroll-smooth gap-2 md:gap-4"
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
                    <ActivityCard activity={activity} />
                </div>
            ))}
        </div>

        <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-[1]" />
    </div>
  );
};

export default ActivityCarousel;