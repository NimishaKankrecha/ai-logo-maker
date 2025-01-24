'use client'

import React, { useState } from 'react';
import HeadingDescription from './HeadingDescription';
import Lookup from '@/app/_data/Lookup';
import LogoDesig from '@/app/_data/LogoDesig';
import Image from 'next/image';

function LogoDesign({onHandleInputChange,FormData}) {
    const [selectedOption, setSelectedOption] = useState(FormData?.design?.title);

    // Handle selection change
    const handleSelection = (designTitle) => {
        setSelectedOption(designTitle);  // Update selected option on click
    };

    return (
        <div className='my-5'>
            <HeadingDescription
                title={Lookup?.LogoDesignTitle}
                description={Lookup?.LogoDesignDescription}
            />

            <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
                {LogoDesig.map((design, index) => (
                    <div
                        key={index}
                        onClick={() =>{ handleSelection(design.title);
                          onHandleInputChange(design);
                        }} 
                        className={`p-2 hover:border-2 rounded-lg border-blue-800 ${selectedOption === design.title ? 'border-2 rounded-lg border-yellow-600' : ''}`}
                    >
                        <Image
                            src={design.image}
                            alt={design.title}
                            width={300}
                            height={200}
                            className='w-full rounded-xl h-[250px] mt-5 object-cover'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LogoDesign;
