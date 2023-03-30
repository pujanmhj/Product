import React from 'react'
import Wrapper from '../Common/Wrapper'
import { useState } from 'react'
import MovieCard from '../Common/MovieCard'
import { useNayahook } from '../Hooks/useNayahook';
import { useNavigate } from 'react-router-dom';
import Pagination from '../Common/Pagination'
import gener from '../Lib/genre';
import Pills from '../Common/Pills';
function Movie() {
  const data = useNayahook('https://yts.torrentbay.to/api/v2/list_movies.json');
  const navigate = useNavigate();
  const cardClick = (imdb_code) => {
    navigate(`${imdb_code}`);
  };
  // console.log("data", data);
  return (
    <div>
      <Wrapper>
        <div class=" d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </div>
        <div className='d-flex align-items-center p-2 pd-2'>
        {gener.map((genree,key)=>{
          return(
            <Pills genree={genree} key={key} />
          )
        })}
        </div>
        <div className='d-flex  align-items-center p-2 pd'>
          {
            data != undefined ?
              <div className=" d-flex  flex-wrap justify-content-center mt-3">
                {
                  Object.values(data).length > 0 ?
                    data.data.movies.map((movie, key) => {
                      return (
                        <MovieCard movie={movie} key={key} cardClick={cardClick} />
                      )
                    })
                    :
                    <p>Loading...</p>

                }
              </div>
              : <p>loading.....</p>
          }
        </div>
          <div>
            <button>Previous</button>
            <button>Next</button>
          </div>
      </Wrapper>
    </div>
  )
}
export default Movie



