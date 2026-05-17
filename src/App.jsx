import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PastEventsSlider from "./components/past event ";
import Register from "./components/Register";
import Speakers from "./components/Speakers";
import TheOrganizer from "./components/TheOrganizer";


function App(){
  return(
    <div>
      <Header />
     <Hero />
      <About />
      <TheOrganizer />
      <Speakers />
       <PastEventsSlider/>
      <Gallery />
      <Register />
   <Footer />
    </div>
  )
}
export default App