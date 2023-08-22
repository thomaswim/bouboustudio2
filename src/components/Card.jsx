import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import '../style/card.css'

function Card({ film, onClick }) {
  return (
    <BootstrapCard 
      onClick={onClick} 
      className="card-custom"
      style={{ background: `url(${film.posterURL}) center / cover no-repeat` }}
    >
      <BootstrapCard.ImgOverlay>
    
      </BootstrapCard.ImgOverlay>
    </BootstrapCard>
  );
}

export default Card;
