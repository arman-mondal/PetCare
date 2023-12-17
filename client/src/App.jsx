import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Blog from './components/Blog'
import Breeds from './components/Breeds'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Shop from './components/Shop'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import shop from "./pages/Shop";

function App() {

  return (
    <Router>
            <Banner />

      <Header/>
      
      <Routes>
        <Route path='/' element={
    <>
      <Hero />
      <About />
      <Services />
      <Shop />
      <Blog />
      <Footer />
    </>} />
<Route path='/shop' Component={shop}/>


      </Routes>
    </Router>
  )
}

export default App
