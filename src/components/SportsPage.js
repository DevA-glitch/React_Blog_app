import React from 'react'
import './SportsPage.css'

const SportsPage = ({sports}) => {

  return (
    <div className='sport_container bg-lime-50 flex items-center justify-center gap-10 p-10 border-b-2'>

        <diV>
        <img className='sport_img' src={sports.Image} />
        <p className='sport_date mt-2'>{sports.Data}</p>
        </diV>

        <div className='w-[1000px]'>
        <p className='sport_maga underline mb-3'>Artical.com</p>
        <h1 className='sport_title'>{sports.Title}</h1>
        <p className='sport_discrib'>{sports.Discription}</p>
        </div>
        

    </div>
  )
  
}

export default SportsPage