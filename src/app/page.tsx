import React from 'react'
import dynamic from 'next/dynamic'

const page = () => {
  const Header = dynamic(() => import('@/components/Header'))
  const Customers = dynamic(() => import('@/components/Customers'))
  const Products  = dynamic(() => import('@/components/Products'))
  const Advantages = dynamic(() => import('@/components/Advantages'))
  const Talents = dynamic(() => import('@/components/Talents'))
  const EffortlessSection = dynamic(() => import('@/components/EffortlessSection'))
  const Banner = dynamic(() => import('@/components/Banner'))
  const BackedBy = dynamic(() => import('@/components/BackedBy'))


  return (
    <div>
      <Header/>
      <Customers/>
      <Products/>
      <Advantages/>
      <Talents/>
      <EffortlessSection/>
      <Banner/>
      <BackedBy/>
    </div>
  )
}

export default page