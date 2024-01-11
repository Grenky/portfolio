import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './styles/Normalize.css';
import './App.css';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import FrontPage from './components/FrontPage';
import People from './components/portfolio-components/People';
import Animals from './components/portfolio-components/Animals';
import Nature from './components/portfolio-components/Nature';

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path='home' element={<Home />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/' element={<FrontPage />}/>

        <Route path='People' element={<People />}/>
        <Route path='Animals' element={<Animals />}/>
        <Route path='Nature' element={<Nature />}/>
      </Routes>  
    </div>
  );
}

export default App;
