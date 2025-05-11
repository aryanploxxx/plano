import { Check, Heart, Star } from "lucide-react"
import { useState } from "react"
import { CiCircleCheck } from "react-icons/ci"
import { FaRegCheckCircle } from "react-icons/fa"
import { HiBadgeCheck } from "react-icons/hi"
import { Link } from "react-router-dom"

const HighRatedProviderCard = () => {
  const [isLiked, setIsLiked] = useState(false)

  const providerCardConfig = {
    distance: "20 miles away",
    academyName: "A1Z Academy",
    classType: "Robotics class",
    rating: {
      score: "4.8",
      count: "50"
    },
    ageRange: "Ages 8 to 12 years",
    features: [
      { text: "Pool" },
      { text: "Group classes" },
      { text: "Heated" },
      { text: "Skating" },
      { text: "Private classes" },
      { text: "Gardening" }
    ],
    pricing: {
      amount: "125",
      period: "month"
    },
    image: {
      src: "/high-rated-card.svg",
      alt: "Students working on robotics project"
    }
  }

  return (
    <>
      {/* Desktop */}
      <Link to ='/provider-details'>
        <div className="hidden md:block w-[335px] mx-auto hover:cursor-pointer">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 p-4">
            <div className="relative">
              <img
                src={providerCardConfig.image.src}
                alt={providerCardConfig.image.alt}
                className="w-full h-[300px] object-cover rounded-xl"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent rounded-xl"></div>

              <div className="flex flex-row items-center justify-between absolute top-4 left-4 right-4">
                <div className="text-white poppins-semibold text-[14px]">{providerCardConfig.distance}</div>

                <div className="flex items-center space-x-2">
                  {/* <div className="rounded-lg"></div> */}
                  <HiBadgeCheck className="w-8 h-8 text-indigo-600" />
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLiked(!isLiked);
                    }}
                  >
                    <Heart className={`w-8 h-8 hover:cursor-pointer ${isLiked ? 'fill-white text-white' : 'text-white'}`} />
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h2 className="text-[20px] poppins-semibold text-gray-900">
                {providerCardConfig.academyName}
              </h2>
              <div className="flex items-center mb-4 text-[16px] poppins-regular text-gray-600">
                <span>{providerCardConfig.classType}</span>
                <span className="mx-2">•</span>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-gray-600" />
                  <span className="">{providerCardConfig.rating.score} ({providerCardConfig.rating.count})</span>
                </div>
              </div>

              <h3 className="text-[16px] poppins-semibold text-gray-900 mb-2">
                {providerCardConfig.ageRange}
              </h3>

              <div className="grid grid-cols-2 gap-y-[2px] mb-2">
                {providerCardConfig.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center">
                      <CiCircleCheck className="w-4 h-4 text-pink-500" />
                    </div>
                    <span className="text-pink-500 poppins-regular text-[14px] text-lg">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              <div className="text-[24px] poppins-semibold text-gray-900">
                ${providerCardConfig.pricing.amount} /{providerCardConfig.pricing.period}
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Mobile */}
      <div className="block md:hidden min-w-[230px] w-full mx-auto hover:cursor-pointer">
        <Link to ='/provider-details'>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 p-2">
            
            <div className="flex flex-row gap-2 justify-between">
              {/* Image */}
              <div className="relative w-[72px] ">
                <img
                  src={providerCardConfig.image.src}
                  alt={providerCardConfig.image.alt}
                  className="h-[72px] rounded-xl"
                />

                <div className="h-[72px] absolute inset-0 bg-gradient-to-b from-black/90 to-transparent rounded-xl"></div>

                <div className="flex flex-row items-center justify-between absolute top-2 right-2">
                  <div className="flex items-center space-x-2">
                    {/* <div className="rounded-lg"></div> */}
                    <HiBadgeCheck className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-row items-center justify-between gap-4">
                  <h2 className="text-[14px] poppins-semibold text-gray-900">
                    {providerCardConfig.academyName}
                  </h2>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLiked(!isLiked);
                    }}
                  >
                    <Heart className={`w-4 h-4 hover:cursor-pointer ${isLiked ? 'fill-gray-600 text-gray-600' : 'text-gray-600'}`} />
                  </button>
                </div>

                <div className="flex flex-col items-start mb-4 text-[11px] poppins-regular text-gray-600">
                  <span>{providerCardConfig.classType}</span>
                  <div className="flex gap-1 items-center">
                    <Star className="w-3 h-3 fill-gray-600 align-top" />
                    <span className="">{providerCardConfig.rating.score} ({providerCardConfig.rating.count})</span>
                  </div>
                  <div className="text-[#999999] poppins-semibold text-[11px]">{providerCardConfig.distance}</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-[16px] poppins-semibold text-gray-900 mb-2">
                {providerCardConfig.ageRange}
              </h3>

              <div className="grid grid-cols-2 gap-y-[2px] mb-2">
                {providerCardConfig.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="rounded-full flex items-center justify-center">
                      <CiCircleCheck className="w-3 h-3 mr-[2px] text-[#F43F80]" />
                    </div>
                    <span className="text-[#F43F80] poppins-regular text-[11px] text-nowrap">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              <div className="text-[16px] poppins-semibold text-gray-900">
                ${providerCardConfig.pricing.amount} /{providerCardConfig.pricing.period}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default HighRatedProviderCard
