"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='flex justify-between p-4 '>
        <Image src={"/image.webp"} alt="logo" height={10} width={100} className='h-5 mt-1'/>
        <div className='flex gap-6 text-[#242466] max-md:hidden'>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Products</Link>
            <Link href={"#"}>Pricing</Link>

        </div>
        <div className='flex gap-3'>
            <Button className='bg-[#4636F5] hover:bg-[#4636F5]'>Sign up</Button>
            <Button variant={"outline"} className='border-[#4636F5]'>Log in </Button>

        </div>
        
    </div>
  )
}

export default NavBar