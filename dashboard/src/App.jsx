import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Room from "./pages/Room";
import RoomEdit from './pages/RoomEdit';
import EnglishRoomEdit from './pages/EnglishRoomEdit';
import RoomAdd from './pages/RoomAdd';
import Feature from './pages/Feature';
import FeatureAdd from './pages/FeatureAdd';
import Contact from './pages/Contact';
import ContactEdit from './pages/ContactEdit';
import About from './pages/About';
import AboutEdit from './pages/AboutEdit';
import Header from './pages/Header';
import HeaderEdit from './pages/HeaderEdit';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/room' element={<Room/>} />
        <Route path='/room/add' element={<RoomAdd/>} />
        <Route path='/room/turkish/:roomId/edit' element={<RoomEdit/>} />
        <Route path='/room/english/:roomId/edit/' element={<EnglishRoomEdit/>} />
        <Route path='/room/feature' element={<Feature/>} />
        <Route path='/room/feature/add' element={<FeatureAdd/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/contact/:contactId/edit' element={<ContactEdit/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/about/:aboutId/edit' element={<AboutEdit/>} />
        <Route path='/header' element={<Header/>} />
        <Route path='/header/:headerId/edit' element={<HeaderEdit/>} />
      </Routes>
    </>
  );
}

export default App;
