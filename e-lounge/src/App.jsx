import Landing from "./pages/Landing";
import logo from './assets/images/E-lounge/android-chrome-192x192.png';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div>
        <nav className="navbar navbar-dark d-flex flex-row border border-dark">
          <div>
          <a className="navbar-brand" href="/#">
            <img className="brandLogo" src={logo} alt="logo"/>
          </a>
          <span className="brandName">E-LOUNGE</span>
          </div>
        </nav>
      </div>

      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Landing/>} />
        </Routes>
      </BrowserRouter>
    </div>

    
    
  );
}

export default App;

<img className="LogoHeader d-inline-block" src={logo} alt="logo"/>