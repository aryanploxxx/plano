import { Star } from 'lucide-react';
import React, { useState } from 'react';

// ReviewHeader Component
const ReviewHeader = ({ rating, totalReviews }) => {
  return (
    <div className="flex w-full items-center gap-2 text-[20px] md:text-2xl text-black poppins-medium leading-none flex-wrap max-md:max-w-full">
      <div className="self-stretch flex items-center gap-1 whitespace-nowrap my-auto">
        <Star className='fill-[#2643A2] stroke-[#2643A2]' />
        <div className="self-stretch my-auto">
          {rating.toFixed(1)}
        </div>
      </div>
      <span className='mx-1'>•</span>
      <div className="self-stretch my-auto">
        {totalReviews} reviews
      </div>
    </div>
  );
};

// ReviewCard Component
const ReviewCard = ({ review }) => {
  return (
    <article className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
      <header className="flex flex-row w-full items-center gap-2 max-md:max-w-full">
        <img
          src={review.avatarUrl}
          alt={`${review.userName}'s avatar`}
          className="aspect-[1] object-contain w-14 self-stretch shrink-0 my-auto"
        />
        <div className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="text-black text-base font-medium max-md:max-w-full mb-1">
            {review.userName}
          </div>
          <div className="text-[#6B7280] text-sm font-normal leading-none max-md:max-w-full">
            {review.date}
          </div>
        </div>
      </header>
      <p className="text-black text-base font-normal mt-4 max-md:max-w-full">
        {review.comment}
      </p>
    </article>
  );
};

// ReviewList Component
const ReviewList = ({ reviews }) => {
  const rows = [];
  for (let i = 0; i < reviews.length; i += 2) {
    rows.push(reviews.slice(i, i + 2));
  }

  return (
    <div className="w-full mt-8 max-md:max-w-full">
      {rows.map((row, index) => (
        <div key={index} className="flex w-full gap-[40px_80px] flex-wrap mt-10 first:mt-0 max-md:max-w-full">
          {row.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      ))}
    </div>
  );
};

// ShowMoreButton Component
const ShowMoreButton = ({ totalReviews, onClick }) => {
  return (
    <div className="flex text-sm text-black font-medium leading-none mt-8">
      <button
        onClick={onClick}
        className="self-stretch border shadow-[0px_1px_2px_0px_rgba(31,41,55,0.08)] bg-white gap-2 px-4 py-2 rounded-lg border-solid border-black hover:bg-gray-50 transition-colors"
      >
        Show more reviews
      </button>
    </div>
  );
};

// Initial Reviews Data
const initialReviews = [
  {
    id: '1',
    userName: 'Jose',
    date: 'December 2021',
    comment: 'Good services',
    avatarUrl: '/circle-1.svg'
  },
  {
    id: '2',
    userName: 'Luke',
    date: 'December 2021',
    comment: 'Good services',
    avatarUrl: '/circle-2.svg'
  },
  {
    id: '3',
    userName: 'Shayna',
    date: 'December 2021',
    comment: 'Good services',
    avatarUrl: '/circle-3.svg'
  },
  {
    id: '4',
    userName: 'Josh',
    date: 'November 2021',
    comment: 'Good services',
    avatarUrl: '/circle-4.svg'
  },
  {
    id: '5',
    userName: 'Vladko',
    date: 'November 2020',
    comment: 'Good services',
    avatarUrl: '/circle-1.svg'
  },
  {
    id: '6',
    userName: 'Jennifer',
    date: 'January 2022',
    comment: 'Good services',
    avatarUrl: '/circle-2.svg'
  },
  {
    id: '7',
    userName: 'Jennifer',
    date: 'January 2022',
    comment: 'Good services',
    avatarUrl: '/circle-3.svg'
  },
  {
    id: '8',
    userName: 'Jennifer',
    date: 'January 2022',
    comment: 'Good services',
    avatarUrl: '/circle-4.svg'
  },
  {
    id: '9',
    userName: 'Jennifer',
    date: 'January 2022',
    comment: 'Good services',
    avatarUrl: '/circle-1.svg'
  }
];

// Main Reviews Component
export const Reviews = () => {
    const [visibleReviews, setVisibleReviews] = useState(6);
    const reviewsPerPage = 6;

    const handleShowMore = () => {
        setVisibleReviews(prev => prev + reviewsPerPage);
    };

    const hasMoreReviews = visibleReviews < initialReviews.length;

    return (
        <section className="px-3 md:px-12 py-6 flex flex-col items-stretch">
            <ReviewHeader rating={5.0} totalReviews={initialReviews.length} />
            <ReviewList reviews={initialReviews.slice(0, visibleReviews)} />
            {hasMoreReviews && (
                <ShowMoreButton 
                    totalReviews={initialReviews.length} 
                    onClick={handleShowMore} 
                />
            )}
        </section>
    );
};

export default Reviews;
