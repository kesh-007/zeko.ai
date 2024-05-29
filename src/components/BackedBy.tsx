import Image from 'next/image'
import React from 'react'

const BackedBy = () => {
  return (
    <div className='my-5 max-md:px-4'>
        <h1 className='text-center text-[#392D82] text-3xl font-bold'>Backed By</h1>
        <Image src={'/backed-by.png'} alt='backedby' height={200} width={500} className='mx-auto mt-5 py-4'/>
        
    </div>
  )
}

export default BackedBy