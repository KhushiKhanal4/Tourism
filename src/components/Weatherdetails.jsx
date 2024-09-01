import React from 'react'


function Weatherdetails({
    icon,
    title,
    detail
}) {
   
    return (
        
            <div className='w-full flex justify-between gap-9 items-center p-4'>
                {icon} 
              
                <h1 className='text-white font-Kanit font-semibold text-lg tracking-widest text-shadow md:text-md'>{title}</h1>
               
                <p className='text-white font-Kanit font-semibold text-md tracking-widest text-shadow'>{detail}</p>
            </div>
        
    )
}

export default Weatherdetails