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

const aboutImages = [aboutImg1, aboutImg2, aboutImg3];

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About aboutImages={aboutImages}/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/donate' element={<Donate/>}/>
      </Routes>
    </>
  );
}

export default App;
