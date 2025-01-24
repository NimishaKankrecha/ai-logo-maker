"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {
  const { user } = useUser();
    const [logoTitle,setLogoTitle]=useState();
  

  return (
    <div className="px-10 lg:px-32 xl:px-48 2xl:px-56 p-6 flex justify-between items-center bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg shadow-xl">
      <div className="flex items-center gap-4">
        <Image 
          src={'/logo.svg'} 
          width={40} 
          height={40} 
          alt='Logo'
          priority
        />
        <h1 className="text-2xl font-semibold text-blue-600">MyApp</h1>
      </div>
      
      <div className="flex gap-4 items-center">
        {user && (
          <Button variant="outline" className="hover:bg-white hover:text-black transition duration-300 ease-in-out">
            Dashboard
          </Button>
        )}
                <Link href={'/create?title='+logoTitle}>
        <Button className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
          Get Started
        </Button>
        </Link>


        <UserButton />
      </div>
    </div>
  );
}

export default Header;
