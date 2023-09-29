import { Route, Routes } from 'react-router';
import './App.css';
import { Home } from './pages/Home/home';
import { About } from './pages/About/about';
import { Contacts } from './pages/Contacts/contacts';
import { Events } from './pages/Events/events';
import { Donate } from './pages/Donate/donate';
import aboutImg1 from "./assets/about_1.png"
import aboutImg2 from "./assets/about_2.png"
import aboutImg3 from "./assets/about_3.png"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getEvents } from './store/eventsSlice';
import cardLogo1 from "./assets/visa.png"
import cardLogo2 from "./assets/mastercard.png"
import cardLogo3 from "./assets/paypal.png"

const aboutImages = [aboutImg1, aboutImg2, aboutImg3];
const cardLogos = [cardLogo1, cardLogo2, cardLogo3];

function App() {
const dispatch = useDispatch();

  useEffect (() => {
    dispatch(getEvents())
  },[])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About aboutImages={aboutImages}/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/donate' element={<Donate cardLogos={cardLogos}/>}/>
      </Routes>
    </>
  );
}

export default App;
