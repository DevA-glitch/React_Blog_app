import React, { useState } from 'react'
import { fasiondata } from '../components/data'
import FasionPage from '../components/FasionPage'

const Fasion = () => {
  const [fasionData, setFasionData] = useState(fasiondata);
  return (
    <div>
      {fasionData.map((fasion) => {
        return (
          <FasionPage key={fasion.Id} {...fasion} fasion={fasion} />
        )
      })}
    </div>
  )
}

export default Fasion