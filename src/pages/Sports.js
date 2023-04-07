import React, { useState } from 'react';
import {sportdata} from '../components/data'
import SportMagazine from '../components/SportsPage';

const Sports = () => {
  const [sportData, setSportsData] = useState(sportdata);
  return (
    <div>
      {sportData.map((sport) => {
        return (
          <SportMagazine key={sport.Id} {...sport} sports={sport} />
        )
      })}
    </div>
  )
}

export default Sports