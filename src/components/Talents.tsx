import React from 'react'
import { Settings, DollarSign, Tag, Wrench } from 'lucide-react';

const Talents = () => {
    const data = [
        {
            icon: <Settings />,
            heading: "Technology and Product",
            content: "AI-powered analysis and skill matching, ensuring companies stay ahead with the best minds in technology.",
            color: "bg-gradient-to-tr from-[#EF4444] to bg-[#FECACA]"
        },
        {
            icon: <DollarSign />,
            heading: "Finance, Accounts & HR",
            content: "Excel at sourcing & auto-interviewing candidates with the intricate blend of analytical and soft skills",
            color: "bg-gradient-to-tr from-[#9C53F9] to bg-[#E6D4FF]"
        },
        {
            icon: <Tag />,
            heading: "Sales and Support",
            content: "Rely on conversational AI interviews to evaluate interpersonal skills, and the strategic thinking at bulk, before talking to anyone",
            color: "bg-gradient-to-tr from-[#10B981] to bg-[#A7F3D0]"
        },
        {
            icon: <Wrench />,
            heading: "Blue and Gray Collar",
            content: "Precise evaluation, of training effectiveness, in local language, to assess skill acquisition & alignment with operational standards",
            color: "bg-gradient-to-tr from-[#9C53F9] to bg-[#E6D4FF]"
        },
    ]
    return (
        <div className='bg-[#501B88] pb-10 py-4 text-white mt-10 text-center'>
            <h1 className='font-bold pt-5 text-3xl'>Talent Acquisition for every role</h1>
            <h4 className='px-[15rem] max-md:p-4 mt-4'>
                Discover Tailored Talent Acquisition Solutions for Every Role, Designed to Empower Businesses in Streamlining Talent Needs and Accelerating Growth
            </h4>
            <div className='max-md:flex-col  px-4 flex justify-around mt-10'>
                {
                    data.map((datum, index) => (
                        <div key={index} className=' max-md:mt-3 flex flex-col items-center'>
                            <div className={`flex justify-center items-center ${datum.color} p-2 w-[3rem] h-[3rem] rounded-full`}>
                                {datum.icon}
                            </div>
                            <h1 className='text-xl font-bold mt-4'>{datum.heading}</h1>
                            <p className='text-center mt-2 text-gray-300'>{datum.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Talents
