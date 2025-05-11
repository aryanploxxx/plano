import { FaRegStar, FaStar } from "react-icons/fa6";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col gap-6 hover:cursor-pointer bg-white border border-[#E5EFFA] shadow-[0px_4px_32px_0px_#00000014] rounded-2xl p-6 py-4 w-[300px] md:w-[400px] lg:w-[450px] lg:max-w-[312px] flex-shrink-0">
        <div className="flex flex-col gap-5">
            <div className="text-[#F43F80] flex flex-row gap-[14px] ">
            {[...Array(5)].map((_, i) => (
                <span key={i}>
                {i < testimonial.rating ? <FaStar strokeWidth={1.75} className="text-[#F43F80] text-xl"/> : <FaRegStar className="text-[#F43F80] text-xl"/>}
                </span>
            ))}
            </div>
            
            <p className="text-[#595959] mb-4 poppins-regular text-[16px] leading-[140%] tracking-normal">
                {testimonial.content}
            </p>
        </div>

        <div className="flex items-center">
            <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-16 h-16 rounded-full mr-4 border border-black"
            />
            <div>
                <p className="poppins-bold text-[20px] leading-[125%] tracking-normal text-[#595959]">{testimonial.author}</p>
                <p className="poppins-regular text-[16px] leading-[125%] tracking-normal text-[#0A0A0A]">{testimonial.location}</p>
            </div>
        </div>
    </div>
  );
};

export default TestimonialCard;