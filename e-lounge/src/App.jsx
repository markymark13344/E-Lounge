import Landing from "./pages/Landing";
import logo from './assets/images/E-lounge/android-chrome-192x192.png';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Post from "./pages/Post";


function App() {
  return (
    <div className="App">    
      <div>
      <div class="topnav">
          <div>
            <a className="navbar-brand" href="/#">
              <img className="brandLogo" src={logo} alt="logo"/>
            </a>
       
          </div>
        <span className="brandName">E-LOUNGE</span>
        <div class="topnav-right">
          <a href="#feed">Feed</a>
          <a href="#music">Music</a>
          <a href="#news">News</a>
          <a href="#games">Games</a>
          <a href="#search">Search</a>
          <a href="#about">About</a>
        </div>
      </div>

      </div>

      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/post' element={<Post/>}/>
        </Routes>
      </BrowserRouter>
    </div>

    
    
  );
}

export default App;

<img className="LogoHeader d-inline-block" src={logo} alt="logo"/>