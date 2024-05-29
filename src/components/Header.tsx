"use client"
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { Input } from './ui/input'

const Header = () => {
  return (
    <div className='flex justify-between max-md:flex-col px-4'>
        <div className='max-w-4xl mt-10 p-8 max-md:w-full'>
        <h1 className='text-5xl text-[#4F33CC] font-bold'>Intelligent Automation 
in Recruitment</h1>
<h2 className='text-[#9C53F9] text-2xl mt-4'>Experience the Future of Hiring with AI-Powered Precision and Speed</h2>
<button  className='hover:bg-inherit mt-10'>
  <Image src={"/product-button.svg"} alt='button' height={60} width={300}/>
  <div className='flex gap-3 mt-10 items-center'>
  <Input placeholder='Enter your email' className='w-[25rem] max-md:w-full'/>
  <Button className='bg-[#4636F5] hover:bg-[#4636F5]'>Sign up</Button>
  </div>
</button>

</div>
<Image src={"/header-photo.webp"} alt="logo" height={600} width={600} className='mr-10' />
        
    </div>
  )
}

export default Header