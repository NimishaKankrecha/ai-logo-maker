"use client"
import colors from '@/app/_data/colors'
import Lookup from '@/app/_data/Lookup'
import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'

function LogoColorpallete({onHandleInputChange,FormData}) {
  const [selectedOption,setSelectedOption]=useState(FormData?.palette);
  return (
    <div className='my-5'>
      <HeadingDescription
      title={Lookup?.LogoColorPaletteTitle}
      description={Lookup?.LogoColorPaletteDescription}/>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
        {colors.map((palette,index)=>(
          <div className={`flex p-2 ${selectedOption==palette.name&&'border rounded-lg border-blue-600'}`}key={index}>
            {
              palette.colors.map((color,index)=>(
                <div className='h-24 w-full'
                key={index}
                onClick={()=>{setSelectedOption(palette.name);
                  onHandleInputChange(palette.name)
                }}
                style={{
                  backgroundColor:color
                }}>
                  </div>
              ))
            }
            </div>
        ))}

      </div>
     
    </div>
  )
}

export default LogoColorpallete
