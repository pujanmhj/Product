import React from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function MovieCard({ movie, key, cardClick })
// const hoove
{
  return (
    <>
      <div
        onClick={() => { cardClick(movie.imdb_code) }
        }>
        <Card style={{ width: '18rem', margin: '5px', padding: '3px', height: '320px' }} key={key} >
          <Card.Img variant="top" src={movie.medium_cover_image} style={{ height: '250px', alignItems: 'center' }} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
              {/* <Link className='btn btn-primary' to={`${movie.title}/MovieDetail`}> Visit</Link> */}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
