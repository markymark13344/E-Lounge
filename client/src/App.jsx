//Page Imports
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Post from "./pages/Post";
import SpotifyLogin from "./pages/SpotifyLogin";
import Spotify from "./pages/Spotify";

import logo from './assets/images/E-lounge/android-chrome-192x192.png';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

//Get Spotify Information from URL Parameters ** After Sending in Token **
const spotifyInfo = new URLSearchParams(window.location.search).get('code')



function App() {
  return (
    <div className="App">    
      <div>
      <div className="topnav">
          <div>
            <a className="navbar-brand" href="/#">
              <img className="brandLogo" src={logo} alt="logo"/>
            </a>
          </div>
        <span className="brandName">E-LOUNGE</span>
        <div className="topnav-right">
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
          <Route path='/Register' element={<Register/>}></Route>
          <Route path='/SpotifyRegister' element={<SpotifyLogin/>}></Route>
          <Route path='/SpotifyDashboard' element={<Spotify code={spotifyInfo} />}></Route>
          <Route path='/Post' element={<Post/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

    
    
  );
}

export default App;
