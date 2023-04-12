import React from 'react'
import Bussi from '../components/BussinesPgae'
import { posterData } from '../components/data'

const Bussines = () => {
  return (
    <div>

      <div className='text-center p-8 tracking-widest font-extrabold'>
      <h1 className='text-4xl mb-5 bg-slate-200 p-2'>BUY POSTER</h1>
        <p className='text-3xl bg-blue-500 p-1'>Limited sales only</p>
      </div>
       <div className=' gap-14  grid grid-cols-5 max-md:grid-cols-2 px-6 py-10'>
       
      {posterData.map((busnis) => {
        return (
          <Bussi key={busnis.Id} {...busnis} busnis={busnis} />
        )
      })}
    </div>
    </div>
  )
}

export default Bussines