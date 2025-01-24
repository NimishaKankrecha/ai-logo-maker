"use client"
import React, { useEffect } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SignInButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

function PricingModel({ FormData }) {
    const {user}=useUser();
  useEffect(() => {
    if (FormData?.title) {
      localStorage.setItem('FormData', JSON.stringify(FormData));
    }
  }, [FormData]);

  return (
    <div className='my-5'>
      <HeadingDescription
        title={Lookup.LogoPricingModelTitle}
        description={Lookup.LogoPricingModelDesc}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Lookup.pricingOption.map((pricing, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 text-center bg-white mt-4"
          >
            <Image
              src={pricing.icon}
              alt={pricing.title}
              width={40}
              height={40}
              className="mx-auto w-12 mb-4"
            />
            <h2 className="text-xl font-bold mb-4">{pricing.title}</h2>
            <ul className="mb-2">
              {pricing.features.map((feature, i) => (
                <li key={i} className="text-gray-700 mb-2">
                  {feature}
                </li>
              ))}
            </ul>
            {user?
               <Link href={'/generate-logo?type='+pricing.title}> 
                 <Button className="bg-orange-700 mt-4 text-white py-2 px-4 rounded hover:bg-orange-800">
                    {pricing.button}
                </Button>
                </Link>:
                <SignInButton mode='modal' forceRedirectUrl={'/generate-logo?type='+pricing.title}>
                     <Button className="bg-orange-700 mt-4 text-white py-2 px-4 rounded hover:bg-orange-800">
                            {pricing.button}
                        </Button>
                </SignInButton>
            }
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingModel;
