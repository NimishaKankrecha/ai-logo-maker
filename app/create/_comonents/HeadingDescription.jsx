import React from 'react'

function HeadingDescription({title,description}) {
  return (
    <div>
      <h2 className='font-bold text-3xl text-blue-700'>{title}</h2>
      <p className='text-md text-gray-600 mt-2'>{description}</p>
    </div>
  )
}

export default HeadingDescription
