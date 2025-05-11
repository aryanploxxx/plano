import { Info } from 'lucide-react'
import React from 'react'

const ActivityCard = ({ activity }) => {
  return (
    <div className='flex flex-col items-center justify-center text-center gap-2 md:px-4 md:py-4 min-w-[72px] max-w-[72px] min-h-[72px] px-11 py-4 md:min-w-[120px] md:max-w-[120px] shadow-[0_4px_32px_0_#00000014] border border-[#E5EFFA] rounded-2xl bg-[#FAFAFA] w-full h-full'>
        <Info className='w-4 h-4 md:w-6 md:h-6'/>
        <span className='text-[11px] md:text-[16px] text-[#7F7F7F] poppins-medium'>
            {activity.activity}
        </span>
    </div>
  )
}

export default ActivityCard