import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (

    <div className='sticky top-0 z-50'>

        <nav className='flex  items-center justify-around bg-black text-white text-xs p-1'>
            <div>
            <p>DailyMagazine in artical.in</p>
            </div>
            <div className='flex gap-20'>
                <p>Copyrights</p>
                <p>Policy</p>
            </div>
        </nav>
    
        <nav class=" border-gray-200 bg-red-500">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-10 py-3">
        <Link to='/' class="flex items-center">
        <h1 className='text-3xl text-white'>Artical.com</h1>
        </Link>
        <div class="flex items-center gap-5">
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Register</Link>
            <div>
          <h2>{props.name ? `Welcome - ${props.name}` : 'welcome'}</h2>
        </div>
        </div>
    </div>
    </nav>

    <nav class="bg-gray-50 dark:bg-gray-700 shadow-md">
    <div class="max-w-screen-xl px-4 py-1 mx-auto md:px-6">
        <div class="flex items-center justify-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <Link to='/' class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home page</Link>
                </li>
                <li>
                    <Link to='/sports' class="text-gray-900 dark:text-white hover:underline" aria-current="page">Sports page</Link>
                </li>
                <li>
                    <Link to='/fasion' class="text-gray-900 dark:text-white hover:underline" aria-current="page">Fasion page</Link>
                </li>
                <li>
                    <Link to='/bussiness' class="text-gray-900 dark:text-white hover:underline" aria-current="page">Buy Poster</Link>
                </li>
            </ul>
        </div>
    </div>
    </nav>

    </div>

  )
}

export default Navbar