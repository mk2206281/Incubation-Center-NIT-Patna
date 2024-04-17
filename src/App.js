// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'; 
import Navbar from './pages/Navbarse';
import Director from './pages/Directors';  
import About from './pages/about';
import Vision from './pages/Vision';
import Incubations from './pages/incubations';
// import Incubationsoo from './pages/swiper';
import Talks from './pages/talks';
import Events from './pages/events';
import Gallery from './pages/gallery';
import Idea from './pages/idea';
import Faqs from './pages/faqs';
import Footer from './pages/footer';


function App() {
  return (
    <div className="App"> 
        < Navbar/>
        <Home />
        <About/>
        <Vision/>
        <Director/>
        <Incubations/>
        {/* <Incubationsoo/> */}
        <Talks/>
        <Events/>
        <Gallery/>
        <Idea/> 
        <Faqs/>
        <Footer/>
    </div>
  );
}

export default App;
