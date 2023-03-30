import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Memo from './Component/Memo';
import Contact from './Component/Contact';
import Product from './Component/Product';
import Vehicle from './Component/Vehicle'
import Error from './Component/error';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vitra from './Component/Vitra';
import Movie from './Component/Movie';
import MovieDetail from './Component/MovieDetail';
// import NavBar from './Common/NavBar'
function App() {
  return (
    <>
   
  <Routes>
            <Route path="/" element={ <Home/> } />
           <Route path="/movie" element={ <Movie/> } />
           <Route path="/movie/:movieID" element={ <MovieDetail/> } />
            <Route path="*" element={ <Error/> } />
            <Route path="/about" element={ <About/> } />
            <Route path="/memo" element={ <Memo/> } />
            <Route path="/product" element={ <Product/> }>
                <Route path=':productType' element={<Vehicle />} /> 
            </Route>
            <Route path=':postId/Vitra/' element={<Vitra/>}/> 
            <Route path="contact" element={ <Contact/> }></Route>
        </Routes>
    </>
  )
}

export default App;
