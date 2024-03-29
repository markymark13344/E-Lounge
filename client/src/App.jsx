//Page Imports
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import SpotifyLogin from "./pages/SpotifyLogin";
import Spotify from "./pages/Spotify";
import SharedLayout from "./pages/SharedLayout";
import ProtectedRoute from "./pages/ProtectedRoute";
import Profile from "./pages/Profile";
import Nav from "./assets/components/Webpage components/Navbar";

import './App.css'
import logo from './assets/images/E-lounge/android-chrome-192x192.png';


import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

//Get Spotify Information from URL Parameters ** After Sending in Token **
const spotifyInfo = new URLSearchParams(window.location.search).get('code')



function App() {
  return (
    <div className="App">    
      <Nav/>

      <BrowserRouter >
        <Routes>
          <Route path="/" element={<ProtectedRoute><SharedLayout/></ProtectedRoute>}>
            <Route path='/SpotifyRegister' element={<SpotifyLogin/>}></Route>
            <Route path='/SpotifyDashboard' element={<Spotify code={spotifyInfo} />}></Route>
            <Route path="/Profile" element={<Profile/>}></Route>
          </Route>
          <Route path='/landing' element={<Landing/>} />
          <Route path='/Register' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

    
    
  );
}

export default App;
