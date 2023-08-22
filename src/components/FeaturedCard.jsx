import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import '../style/card.css'

function FeaturedCard({ film, image, imagexs ,onCardClick}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bgImage = windowWidth <= 450 ? imagexs : image; // Supposez que 768px est le point de rupture

  return (
    <Card onClick={() => onCardClick(film)} className="mb-4 rounded-lg shadow custom-card" style={{ height: '400px', background: `url(${bgImage}) center / cover no-repeat` }}>
      <Card.ImgOverlay className="d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-end">
            <Badge pill variant="orange">
                New
            </Badge>
        </div>
        <div className="badge-container">
            <Badge pill bg="light" text="dark">
                <span>&#x1F4C5;</span>  {film.releaseDate}
            </Badge>
            <Badge pill bg="light" text="dark">
                <span>&#x23F0;</span> {film.duration}
            </Badge>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default FeaturedCard;
