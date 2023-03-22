import Landing from "./pages/Landing";
import logo from './assets/images/E-lounge/android-chrome-192x192.png';


function App() {
  return (
    <div className="App">
      <div>

      

      <nav className="navbar navbar-dark d-flex flex-row">
        <div>
        <a className="navbar-brand" href="/#">
          <img className="p-2" src={logo} alt="logo"/>
        </a>
        <span className="brandName">E-LOUNGE</span>
        </div>
       
        
       </nav>



      </div>
      

      
      <Landing />
    </div>
  );
}

export default App;

<img className="LogoHeader d-inline-block" src={logo} alt="logo"/>