import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './styles/Normalize.css';
import './App.css';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import FrontPage from './components/FrontPage';

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path='home' element={<Home />}/>
        <Route path='portfolio' element={<Portfolio />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='frontpage' element={<FrontPage />}/>
      </Routes>  
    </div>
  );
}

export default App;
