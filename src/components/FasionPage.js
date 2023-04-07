import React from 'react'
import './FasionPage.css'

const FasionPage = ({fasion}) => {
  return (
    <div className='fasion_container bg-orange-50 flex items-center justify-center gap-10 p-10 border-b-2'>

        <diV>
        <img className='fasion_img' src={fasion.Image} />
        <p className='fasion_date mt-2'>{fasion.Data}</p>
        </diV>

        <div className='w-[1000px]'>
        <p className='fasion_maga border-b-red-400 border-b-2 mb-3'>Artical.com</p>
        <h1 className='fasion_title'>{fasion.Title}</h1>
        <p className='fasion_discrib'>{fasion.Discription}</p>
        </div>
        

    </div>
  )
}

export default FasionPage