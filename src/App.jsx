import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Register from "./components/Register";
import Speakers from "./components/Speakers";
import TheOrganizer from "./components/TheOrganizer";
import Hadil from "./Hadil";




function App(){
  return(
    <div>
      <Header />
     <Hero />
      <About />
      <TheOrganizer />
      <Speakers />
      <Gallery />
      <Register />
   <Footer />
    </div>
  )
}
export default App