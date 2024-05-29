import React from 'react'
import { Button } from './ui/button'
import ProductsCard from './ProductsCard'
import { AreaChart,Users,UserSearch,UserPlus } from 'lucide-react';


const Advantages = () => {
  return (
    <div className='flex justify-between max-md:flex-col max-md:container'>
        <div className=' my-5 flex flex-col  justify-center items-center md:px-10 '>
            <div className='text-start'>
            <h1 className='text-[#4F33CC] md:text-4xl text-2xl font-bold mb-2 '>The Unmatched Advantage with Zeko AI</h1>
            <h5 className='font-bold text-gray-500 mb-3'>Explore the Acquisition intelligence in action</h5>
            <Button className='bg-[#4636F5] max-md:w-full hover:bg-[#4636F5]'>Get Started 🔥</Button>
            </div>
        </div>
        <div className='px-20 mt-20 max-md:px-0 max-md:mt-0 max-md:w-full'>
            <div className='flex gap-3 max-md:flex-col '>
            <ProductsCard icon={ <AreaChart className='bg-[#9CABFD] text-white items-center p-2 flex justify-center h-8 w-8 rounded-full' />} heading='Broaden your Talent Pool' content='Uncover hidden talent pool instantly as AI pinpoints & reachout to qualified candidates beyond your usual networks.' className='bg-[#EEf0FF] border-none hover:scale-105 cursor-pointer'/>
            <ProductsCard 
            icon={<Users className='bg-[#CBA6FD] text-white items-center p-2 flex justify-center h-8 w-8 rounded-full'/>} 
            heading='Stop Spending Hours on Irrelevant Profiles' 
            content='Utilize advanced AI algorithms, from sourcing to interviews, ensuring that candidates who move forward are those best matched to the job & culture' 
            className='md:mt-4 bg-[#F9F4FF] border-none hover:scale-105 cursor-pointer'/>
            </div>
            <div className='flex gap-3 max-md:flex-col'>
            <ProductsCard 
            icon={<UserSearch className='bg-[#CBA6FD] text-white items-center p-2 flex justify-center h-8 w-8 rounded-full'/>}
            heading='Faster Hiring with AI Avatars' 
            content='AI Avatars automate key tasks, speeding up the hiring process by screening and interviewing candidates, allowing HR teams to focus on strategic decisions'
            className='md:mt-2 mt-2 bg-[#F1E8FE] hover:scale-105 cursor-pointer'/>
            <ProductsCard 
            icon={<UserPlus className='bg-[#9CABFD] text-white items-center p-2 flex justify-center h-8 w-8 rounded-full'/>}
            heading='Data-Driven Insights for Key Decisions' 
            content='Leverage powerful talent analytics for insightful hiring decisions, improving your time to hire and overall return on investment.'
            className='md:mt-4 bg-[#DDE4FE] hover:scale-105 cursor-pointer'/>
            </div>
        </div>


    </div>
  )
}

export default Advantages