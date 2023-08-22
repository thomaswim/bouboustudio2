import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from './Card';

function Category({ title, films, onCardClick }) {
  return (
    <div>
      <br/>
      <h2 className='category_title'>{title}</h2>
      <Row >
        {films.map((film, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}  className="col-spacing">
            <Card film={film} onClick={() => onCardClick(film)} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Category;
