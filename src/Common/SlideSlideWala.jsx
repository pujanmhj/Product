import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useEffect, useState ,useContext, createContext} from "react";
import { useLocation } from "react-router-dom";
import CardIndex from './Card';
import { CounterContext } from '../Lib/store';
import ProductContext from '../Providers/ProductProvider';
// import { Namaste } from '../App';


function SlideSlideWala() {
  const [path, setPath] = useState([]);
  const location = useLocation();

  useEffect(() => {
    let tmp = location.pathname.split('/');
    setPath(tmp);
  }, [location]);
  
  const[state]=useContext(CounterContext)
  // const Name = useContext(ProductContext)
 
   
  return ( 
    <CardIndex>
      <Breadcrumb>
        {
          path.length > 0 &&
          path.map((tmp, key) => {
            return (
              <Breadcrumb.Item key={key} href={tmp}> {tmp} </Breadcrumb.Item>
            )
          })
        }
      </Breadcrumb>
      <span>{state.counter}</span>
     {/* <p>
      {Name}
     </p> */}
    </CardIndex>
    
  );
}
export default SlideSlideWala;
// export {Namaste}







