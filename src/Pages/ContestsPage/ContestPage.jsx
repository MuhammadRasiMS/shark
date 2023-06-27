import React from 'react';
import Live from '../../components/Contests/Live/Live';
import cards from './cardsData';
import LiveRight from '../../components/Contests/LiveRight/LiveRight';
import './ContestPage.css'

const ContestPage = () => {
  return (
    <div className='contests-container'>
      <Live cardsData={cards} />
      <LiveRight />
    </div>
  );
}

export default ContestPage;