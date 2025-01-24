'use client'
import React, { useState } from 'react'
import Lookup from '../_data/Lookup'
import { Button } from '@/components/ui/button'
import Link from 'next/link';

function Hero() {
  const [logoTitle,setLogoTitle]=useState();
  return (
    <div className='flex items-center mt-32 flex-col gap-5 '>
        <h2 className='text-primary text-teal-700 text-5xl font-bold font-sans'>{Lookup.HeroHeading}</h2>
        <h2 className='font-semibold text-3xl text-primary text-red-800 text-center'>{Lookup.HeroSubHeading}</h2>
        <p className='text-lg text-primary text-gray-400 text-center'>{Lookup.HeroDescription}</p>
      
      <div className='flex gap-6 w-full max-w-2xl'>
        <input className='p-3 border rounded-lg w-full shadow-md' placeholder={Lookup.InputTitlePlaceholder}
        onChange={(event)=>setLogoTitle(event?.target.value)}/>
        <Link href={'/create?title='+logoTitle}>
        <Button  className='w-full p-6'>Get Started</Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
