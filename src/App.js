import Loginpage from './Pages/Start_Page';
import Signinpage from './Pages/Sign_In_Page';
import  Home  from './Pages/Home';

import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Loginpage />} />
          <Route path="/sign-in" element={<Signinpage />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/notfound" element={<Notfound/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
