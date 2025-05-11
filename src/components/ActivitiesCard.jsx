import { FaRegStar, FaStar } from "react-icons/fa6";

const ActivitiesCard = ({ activity }) => {
return (
    <div 
        className="relative w-[280px] h-[400px] rounded-2xl overflow-hidden hover:cursor-pointer"
        style={{
            backgroundImage: `url(${activity.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
    >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent">
            <div className="absolute bottom-6 text-center w-full">
                <h3 className="text-white text-[38px] poppins-semibold">{activity.title}</h3>
            </div>
        </div>
    </div>
);
};

export default ActivitiesCard;