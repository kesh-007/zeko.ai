import React from 'react'
import { Button } from './ui/button'
import ProductsCard from './ProductsCard'

const Advantages = () => {
  return (
    <div className='flex justify-between max-md:flex-col'>
        <div className=' my-5 flex flex-col  justify-center items-center md:px-20 max-w-2xl'>
            <div className='text-start'>
            <h1 className='text-[#4F33CC] text-4xl font-bold mb-2 '>The Unmatched Advantage with Zeko AI</h1>
            <h5 className='font-bold text-gray-500 mb-3'>Explore the Acquisition intelligence in action</h5>
            <Button className='bg-[#4636F5] hover:bg-[#4636F5]'>Get Started 🔥</Button>
            </div>
        </div>
        <div className='px-20 mt-20 max-md:px-0 max-md:mt-0 max-md:w-full'>
            <div className='flex gap-3 max-md:flex-col '>
            <ProductsCard icon={<i className="fas fa-rocket text-[#4F33CC] text-4xl"></i>} heading='Fastest Delivery' content='Get your products delivered at the fastest speed possible.' className='bg-[#EEf0FF] border-none'/>
            <ProductsCard icon={<i className="fas fa-shield-alt text-[#4F33CC] text-4xl"></i>} heading='Secure' content='We make sure your data is safe and secure.' className='mt-4 bg-[#F9F4FF] border-none'/>
            </div>
            <div className='flex gap-3 max-md:flex-col'>
            <ProductsCard icon={<i className="fas fa-headset text-[#4F33CC] text-4xl"></i>} heading='24/7 Support' content='We provide 24/7 support for all our customers.' className='mt-2 bg-[#F1E8FE]'/>
            <ProductsCard icon={<i className="fas fa-headset text-[#4F33CC] text-4xl"></i>} heading='24/7 Support' content='We provide 24/7 support for all our customers.' className='mt-4 bg-[#DDE4FE]'/>
            </div>
        </div>


    </div>
  )
}

export default Advantages