
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pages/Home';

function App() {
  let menuState = false;


  const menuActive = (data) =>{
    menuState = data;
    console.log(menuState)
    
  }
  
  return (
    <div className="App">
      <Router>
        <Header menuActive={menuActive}/>
        <Routes>
          <Route path ='/' element={<Home menuActive={menuState}/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
