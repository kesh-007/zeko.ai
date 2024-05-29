"use server"
import { imageData } from '@/data'
import Image from 'next/image'
import React from 'react'


const Customers = () => {
  return (
    <div className='mt-10'>
        <h1 className='text-[#4F33CC] text-center font-bold text-3xl'>Chosen by the new generation of industry leaders.</h1>
        
        {/* @ts-ignore */}
        <marquee>
        <div className='flex gap-[5rem] mt-10 ml-10 max-md:gap-4 max-md:ml-0  '>
          {imageData.map((image, index) => (
            <Image 
              key={index} 
              src={image.src} 
              alt={image.alt} 
              width={150} 
              height={50} 
              className='' 
            />
          ))}
        </div>
        {/* @ts-ignore */}
        </marquee>
    </div>
  )
}

export default Customers
