import React from 'react'
import { Button } from './ui/button'
import ProductsCard from './ProductsCard'
import EffortsCard from './EffortsCard'

const EffortlessSection = () => {
  const data = {
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    name:"Roshinee",
    role:"Senior Engineering Manager"

  }
  return (
    <div className='flex justify-between max-md:flex-col container'>
        <div className='h-screen flex flex-col  justify-center items-center px-10 max-w-6xl'>
            <div className='text-start'>
            <h1 className='text-[#4F33CC] text-5xl font-bold mb-2 '>Effortless Acquisition</h1>
            <div className='flex gap-3 mt-5'>
            <div className='p-2 shadow-md text-sm inline-block '><span className='text-[#4F33CC] text-xl'>86%</span> FASTER</div>
            <div className='p-2 shadow-md text-sm inline-block '><span className='text-[#4F33CC] text-xl'>40%</span> RESPONSE RATE</div>            <div className='p-2 shadow-md text-sm inline-block '><span className='text-[#4F33CC] text-xl'>100%</span> BETTER THAN HR INTERN</div>

            </div>

            </div>
        </div>
        <div className='px-2  mt-20 max-md:px-0 max-md:mt-0 max-md:w-full'>
            <div className='flex gap-3 max-md:flex-col '>
            <EffortsCard name={data.name} role={data.role} content={data.content} className='' />
            <EffortsCard name={data.name} role={data.role} content={data.content} className=' mt-4 ' />
            </div>
            <div className='flex gap-3 max-md:flex-col'>
            <EffortsCard name={data.name} role={data.role} content={data.content} className=' mt-2 ' />
            <EffortsCard name={data.name} role={data.role} content={data.content} className='mt-2  ' />
            </div>
        </div>


    </div>
  )
}

export default EffortlessSection