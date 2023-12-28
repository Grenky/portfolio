import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './styles/Normalize.css';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        
        <Route path='contact' element={<Contact />}/>
      </Routes>  
    </div>
  );
}

export default App;
