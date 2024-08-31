import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className='shadow-md sticky z-50 top-0'>

            <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>

                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>

                    <Link to="/" className="flex items-center">
                        <img
                            src="./logo.jpg"
                            className="mr-3 w-20 rounded-full"
                            alt="Logo"
                        />
                    </Link>

                    <div className="flex items-center md:order-2 ">

                        <Link
                            to="#"
                            className="text-yellow-100 bg-emerald-800 hover:bg-emerald-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Search
                        </Link>

                    </div>

                    <div
                        className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 text-lg font-medium md:flex-row md:space-x-10 lg:mt-0">
                            <li>
                                <NavLink
                                    className={() =>
                                        `block py-2 px-3 rounded-lg duration-200 border-b  border-gray-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 md:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/PlacesToVisit"
                                    className={() =>
                                        `block py-2 px-3 rounded-lg duration-200 border-b  border-gray-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 md:p-0`
                                    }
                                >
                                    Places to visit
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/Weather"
                                    className={() =>
                                        `block py-2 px-3 rounded-lg duration-200 border-b  border-gray-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 md:p-0`
                                    }
                                >
                                   Weather
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/ContactUs"

                                    className={() =>
                                        `block py-2 px-3 rounded-lg duration-200 border-b  border-gray-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 md:p-0`
                                    }
                                >
                                  Contact Us
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header