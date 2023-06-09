import React, { useContext } from 'react'
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
import Reducer from './Component/Reducer';
import MovieDetail from './Component/MovieDetail';
import Store from './Lib/store';
import Fruits from './Common/Fruits';
import Weather from './Component/Weather';
import ClassComponent from './Component/ClassComponent';

function App() {
  return (
    <>
           <Store>
           <Routes>
           <Route path="/" element={ <Home/> } />
           <Route path="/movie" element={ <Movie/> } />
           <Route path="/movie/:movieID" element={ <MovieDetail/> } />
            <Route path="*" element={ <Error/> } />
            <Route path="/about" element={ <About/> } />
            <Route path="/reducer" element={ <Reducer/> } />
            <Route path="/fruits" element={ <Fruits/> } />
            <Route path="/memo" element={ <Memo/> } />
            <Route path="/product" element={ <Product/> }>
               <Route path=':productType' element={<Vehicle />} /> 
            </Route>
            <Route path=':postId/Vitra/' element={<Vitra/>}/> 
            <Route path='/classcomponent' element={<ClassComponent/>}/> 
            <Route path="contact" element={ <Contact/> }></Route>
            <Route path="weather" element={ <Weather/> }></Route>
           </Routes>
           </Store> 
    </>
  )
}

export default App;
