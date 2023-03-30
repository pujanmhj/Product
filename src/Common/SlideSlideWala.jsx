import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import CardIndex from './Card';
function SlideSlideWala() {
  const [path, setPath] = useState([]);
  const location = useLocation();

  useEffect(()=>{
      let tmp = location.pathname.split('/');
      setPath(tmp);
  },[location]);
  return (
    <CardIndex>
      <Breadcrumb>
    {
      path.length > 0 &&
        path.map((tmp,key)=>{
          return(
            <Breadcrumb.Item key={key} href={tmp}> {tmp} </Breadcrumb.Item>
          )
        })
    }  
    </Breadcrumb>
    </CardIndex>
  );
}
export default SlideSlideWala;







