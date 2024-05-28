import Image from 'next/image'
import React from 'react'

const imageData = [
  { src: "/company1.png", alt: "company 1", width: 200, height: 150 },
  { src: "/company2.png", alt: "company 2", width: 200, height: 150 },
  { src: "/company3.png", alt: "company 3", width: 200, height: 150 },
  { src: "/company4.png", alt: "company 4", width: 200, height: 150 },
  { src: "/company5.png", alt: "company 5", width: 200, height: 150 }
];

const Customers = () => {
  return (
    <div className='mt-10'>
        <h1 className='text-[#4F33CC] text-center font-bold text-3xl'>Chosen by the new generation of industry leaders.</h1>
        
        {/* @ts-ignore */}
        <marquee>
        <div className='flex gap-[5rem] mt-10 ml-10 max-md:gap-4 max-md:ml-0 max-md:overflow-x-auto max-md:scrollbar-hide'>
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
