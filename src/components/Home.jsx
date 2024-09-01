import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className="relative bg-gray-300">
                <video autoPlay loop muted className="">
                    <source src="vdo.mp4" type="video/mp4" />
                </video>
                <div className='absolute z-10 top-1/3 md:top-1/2 left-1/2 flex flex-wrap justify-center justify-items-center mx-auto items-center gap-2 '>

                    <h1 className='text-white text-shadow-xl font-bold text-xl font-Kanit text-center pr-1 sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl'>Adventure Awaits at Every Corner</h1>

                </div>

            </div>

            <div className='text-sm font-normal my-8 mx-3 text-center font-Kanit text-gray-700 sm:mx-6 md:text-md lg:text-lg '>
                <p className='pb-9'> Bali, often called the Island of the Gods, is a tropical paradise known for its stunning beaches, lush landscapes, and rich cultural heritage. From the serene rice terraces of Ubud to the vibrant surf spots of Kuta, Bali offers something for every traveler. With its warm hospitality, captivating temples, and a blend of relaxation and adventure, Bali is a must-visit destination for those seeking a unique and unforgettable experience.
                </p>

                
                <Link
                to="/PlacesToVisit"
                className='bg-emerald-700 rounded-lg p-2 px-3  text-white'>
                Explore
                </Link>
            </div>

        </>
    )
}

export default Home