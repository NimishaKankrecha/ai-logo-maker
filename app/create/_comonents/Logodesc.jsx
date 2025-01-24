'use client'

import React from 'react';
import HeadingDescription from './HeadingDescription';
import Lookup from '@/app/_data/Lookup';

function Logodesc({ onHandleInputChange, FormData }) {
  // Provide default values in case Lookup is undefined or its properties are missing
  const title = Lookup?.Logodesctitle || 'Default Title';
  const description = Lookup?.LogoDescDesc || 'Default description text';
  const placeholder = Lookup?.InputTitlePlaceholder || 'Enter description here';

  return (
    <div className='my-10'>
      <HeadingDescription title={title} description={description} />

      <input
        className='p-4 border rounded-lg w-full shadow-sm mt-4'
        placeholder={placeholder}
        defaultValue={FormData?.description || ''}  // Handle undefined FormData.description
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
}

export default Logodesc;
