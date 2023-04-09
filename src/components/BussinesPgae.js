import React from 'react'

const BussinesPgae = ({busnis}) => {
  return (
    <div className=' py-1 px-1  hover:shadow-lg hover:border duration-200'>
        <div >
        <img className='fasion_img w-[13rem]  h-[15rem] border-[1px] cursor-pointer hover:scale-110 duration-300 border-black' src={busnis.Image} />
        <p className='fasion_date mt-7'>{busnis.Data}</p>
        </div>

        <div>
            <p>Cuztamizable page</p>
        <h1 className='fasion_title'>{busnis.Title}</h1>
        <button className=' bg-red-400 px-6 text-sm py-1 text-white hover:bg-fuchsia-500 duration-150'>Buy</button>
        </div>
    </div>
  )
}

export default BussinesPgae