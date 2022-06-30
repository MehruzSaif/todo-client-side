import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Calender from './Pages/Calender/Calender';
import Home from './Pages/Home/Home';
import Completed from './Pages/Completed/Completed';
import ToDo from './Pages/ToDo/ToDo';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="completed" element={<Completed />} />
        <Route path="toDo" element={<ToDo />} />
        <Route path="calender" element={<Calender />} />
      </Routes>
    </div>
  );
}

export default App;
