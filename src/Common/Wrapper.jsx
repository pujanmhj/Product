
import NavBar from './NavBar';
import SlideSlideWala from './SlideSlideWala';
import Footer from './Footer';

 function Wrapper({children}) {
  return (
    <div>
        <NavBar/>
        <SlideSlideWala/>
        <div style={{width:'100%', alignItems:'center',justifyContent: 'center',padding:'30px'}}>
        {children}
        </div>
        <Footer/>
    </div>
  )
}
export default Wrapper;