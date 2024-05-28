import Advantages from '@/components/Advantages'
import BackedBy from '@/components/BackedBy'
import Banner from '@/components/Banner'
import Customers from '@/components/Customers'
import EffortlessSection from '@/components/EffortlessSection'
import Header from '@/components/Header'
import Products from '@/components/Products'
import Talents from '@/components/Talents'
import React from 'react'

const page = () => {
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