import React from 'react'
import { Button } from './ui/button'

const Banner = () => {
  return (
    <div className="bg-[url('/banner.png')] mt-10 mb-20 bg-cover bg-center h-[8rem] flex items-center justify-between px-5">
        
      <h1 className="text-white text-3xl font-bold">Start a new, effortless hiring adventure now.</h1>
      <div className='flex gap-4'>
        <Button className='bg-[#4636F5]'>Sign up</Button>
        <Button variant={"outline"} className='border-[#A3A9FE]'>Book A Demo</Button>

      </div>
    </div>
  )
}

export default Banner
