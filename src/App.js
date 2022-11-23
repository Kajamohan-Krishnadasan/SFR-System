import Signinpage from "./Pages/SignUpPage";
import Loginpage from "./Pages/LoginPage";
import Home from "./Pages/UHome";
import Public from "./Pages/Public";
import AdminLoginPage from "./Pages/AdminLoginPage";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AdminHome from "./Pages/AHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Public />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/sign-up" element={<Signinpage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
