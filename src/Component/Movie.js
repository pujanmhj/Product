import React from 'react'
import Wrapper from '../Common/Wrapper'
import MovieCard from '../Common/MovieCard'
import { useNayahook } from '../Hooks/useNayahook';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import gener from '../Lib/genre';
import Pills from '../Common/Pills';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination';
import Loading from '../Common/Loading';

function Movie() {
  let loop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [selectedGenre, setSelectedGenre] = useState('Comedy');

  const [data, setData] = useState([]);

  let url = `https://yts.torrentbay.to/api/v2/list_movies.json`;

  const navigate = useNavigate();

  const cardClick = (imdb_code) => {
    navigate(`${imdb_code}`);
  };

  const getMoviesData = (url) => {
    axios.get(url).then((resend) => {
      setData(resend.data);
    });
  }
  useEffect(() => {
    getMoviesData(url);
  }, []);

  const changeGenre = async (genre) => {
    setData(undefined);
    setSelectedGenre(genre);
    let url = `https://yts.torrentbay.to/api/v2/list_movies.json?limit=10&genre=${genre}&page=2`;
    getMoviesData(url);
  }

  const changePage = (page) => {
    setData(undefined);
    let url = `https://yts.torrentbay.to/api/v2/list_movies.json?limit=10&page=${page}`;
    getMoviesData(url);
  }

  const loading = () => {
    return (
      loop.map((number) => {
        return (
          <Loading number={number} />
        )
      })
    )
  }

  return (
    <div>
      <Wrapper>
        <div class=" d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </div>
        <div className='d-flex align-items-center p-2 '>
          {
            gener.map((genree, key) => {
              return (
                <Pills genree={genree} key={key} onPress={changeGenre} />
              )
            })
          }
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
                    loading()

                }
              </div>
              : loading()
          }
        </div>
        {/* <div className='d-flex justify-content-center '>
               {
                   [1,2,3,4,5,6,7,8,9,10].map((number,key)=>{
                       return (
                           <button 
                            key={key}
                            onClick={()=>{changePage(number)}}
                           >{number}</button>
                       )
                   })
               }
        </div> */}
        <div>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </Wrapper>
    </div>
  )
}
export default Movie



