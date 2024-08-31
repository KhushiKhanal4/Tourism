import React from 'react'
import { LuWind } from "react-icons/lu";
import { useLoaderData } from 'react-router-dom'

function Weather() {
    const data = useLoaderData();
    const weatherData = data.weather[0];
    const tempData = data.main;
    const windData = data.wind;

    return (

        <div className='bg-gradient-to-tr from-green-400 to-teal-600 '>

            <h2 className='font-medium font-mono text-sm text-white text-shadow-md p-3 sm:py-5 sm:text-lg'>CURRENT WEATHER </h2>
            <hr className='w-full ' />

            <div className='flex flex-col justify-center justify-items-center items-center pb-9 max-w-screen-md mx-auto sm:flex-row'>

                <div className='flex justify-items-center items-center'>

                    <img
                        src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                        alt="icon"
                    />

                    <div className='flex flex-col text-shadow-md'>

                        <h2 className='text-white font-bold font-Kanit text-xl tracking-wider sm:text-3xl'>{tempData.temp} ° C</h2>

                        <h4 className='text-white  font-Kanit text-xs tracking-wider sm:text-sm'>Feels like:{tempData.feels_like} ° C</h4>

                    </div>

                </div>


                <div className='bg-[#ffffff38] rounded-lg flex flex-col justify-center max-w-screen-lg p-4'>
                    <div className='w-full flex justify-between gap-7 items-center'>
                        <LuWind />
                        <h1 className='text-white font-Kanit font-semibold text-lg tracking-widest text-shadow'>Wind</h1>
                        <p>{windData.speed} m/s</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Weather


export const weatherInfoLoader = async () => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=-8.409518&lon=115.188919&appid=56b9f21833b38abac833852799ad52f9');
    return response.json();
}