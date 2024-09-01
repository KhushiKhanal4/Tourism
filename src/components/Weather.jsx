import React from 'react'

import { useLoaderData } from 'react-router-dom'
import Weatherdetails from './Weatherdetails'
import { LuWind } from 'react-icons/lu';
import { WiHumidity } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { IoCloudSharp } from "react-icons/io5";


function Weather() {
    const data = useLoaderData();
    const weatherData = data.weather[0];
    const tempData = data.main;
    const windData = data.wind;
    const visibility = (data.visibility / 1000).toFixed(1);

    return (

        <div className='bg-gradient-to-tr from-green-400 to-teal-600 '>

            <h2 className='font-medium font-sans text-sm text-black text-shadow-md p-3 sm:py-5 sm:text-lg'>CURRENT WEATHER </h2>

            <hr className='w-full ' />

            <div className='flex flex-col justify-center justify-items-center items-center pb-9 max-w-screen-md mx-auto sm:flex-row lg:max-w-screen-lg lg:gap-9'>

                <div className='flex justify-items-center items-center'>

                    <img
                        src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                        alt="icon"
                    />

                    <div className='flex flex-col text-shadow-md'>

                        <h2 className='text-white font-bold font-Kanit text-xl tracking-wider sm:text-3xl lg:text-5xl'>{tempData.temp} ° C</h2>

                        <h4 className='text-white  font-Kanit text-xs tracking-wider sm:text-sm lg:text-md'>Feels like:{tempData.feels_like} ° C</h4>

                    </div>

                </div>

                <div className='bg-[#ffffff38] rounded-lg flex flex-col justify-center max-w-screen-lg sm:p-4 my-4 sm:m-11 sm:ml-28 lg:p-9'>
                    <Weatherdetails
                        icon={<LuWind/>}
                        title={"Wind"}
                        detail={`${windData.speed} m/s`}
                    />
                    <hr />
                    <Weatherdetails
                        icon={<WiHumidity 
                        className='text-xl'
                        />}
                        title={"Humidity"}
                        detail={`${tempData.humidity} %`}
                    />
                    <hr />
                    <Weatherdetails
                        icon={<MdVisibility />}
                        title={"Visibility"}
                        detail={`${visibility} km`}
                    />
                    <hr />
                    <Weatherdetails
                        icon={<IoCloudSharp />}
                        title={"Cloudiness"}
                        detail={`${data.clouds.all} %`}
                    />
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