import React from 'react'
import { useParams } from 'react-router-dom'

function location() {
    const {locationid}=useParams();
  return (
    <div className='font-semibold font-Kanit text-2xl p-9'>Location : {locationid}</div>
  )
}

export default location 