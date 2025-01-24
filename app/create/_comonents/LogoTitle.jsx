'use client'
import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '../../_data/Lookup'
import { useSearchParams } from 'next/navigation'

function LogoTitle({onHandleInputChange}) {
    const searchparams=useSearchParams();
    const [title,setTitle]=useState(searchparams?.get('title')??'');
  return (
    <div className='my-10'>
      <HeadingDescription 
      title={Lookup?.LogoTitle}
      description={Lookup?.Logotitledec}/>

    <input className='p-4 border rounded-lg w-full shadow-sm mt-4' placeholder={Lookup.InputTitlePlaceholder}
    defaultValue={title}
    onChange={(e)=>onHandleInputChange(e.target.value)}/>
    </div>
  )
}

export default LogoTitle
