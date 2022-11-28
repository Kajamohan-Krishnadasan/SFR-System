import React from "react";
import "../Assets/Styles/Header.Module.css";
import { useNavigate } from "react-router-dom";

import "../Assets/Styles/Public.Module.css";
import ImageSlider from "../Components/ImageSlider/ImageSlider";
import { img1, img2, img3, img4 } from "../Assets/Images/Images";
import Footer from "../Components/Footer/Footer";
import { mainLogo } from "../Assets/Icons/index";
const Public = () => {
  const navigate = useNavigate();

  const PublicPage = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const loginPage = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const loginAdminPage = (e) => {
    e.preventDefault();
    navigate("/admin-login");
  };

  const RegisterPage = (e) => {
    e.preventDefault();
    navigate("/sign-up");
  };

  const slides = [
    { url: `url(${img1})`, title: "img 1" },
    { url: `url(${img2})`, title: "img 2" },
    { url: `url(${img3})`, title: "img 3" },
    { url: `url(${img4})`, title: "img 4" },
  ];

  return (
    <div className="public-main">
      <nav className="main-nav-bar">
        <div className="header-left">
          <img src={mainLogo} alt="" className="main-logo"  onClick={PublicPage}/>
          <div className="heading" onClick={PublicPage}>
            Sport Facilities Reservation System
          </div>
        </div>

        <div className="header-right">
          <button className="Public-page-button" onClick={loginPage}>
            Login
          </button>{" "}
          |
          <button className="Public-page-button" onClick={RegisterPage}>
            Register
          </button>{" "}
          |
          <button className="Public-page-button" onClick={loginAdminPage}>
            Admin
          </button>
        </div>
      </nav>
      <main className="main-area">
        <div className="img-container">
          <ImageSlider slides={slides} />
        </div>
        <div className="public-main-des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quo
          error at consequatur vero officiis soluta beatae nemo blanditiis sunt
          aliquid, repellat minima dolores quisquam, rem, dolorem inventore in
          obcaecati? Sequi quasi distinctio tenetur aperiam at natus aliquid
          iure quidem quod laborum vero maxime, alias neque quisquam architecto
          commodi voluptatibus! Neque similique eos libero sequi quis
          praesentium ratione in consequatur? Maiores temporibus nemo sed ipsa
          veniam eos rem. Sunt, quis repellat animi velit similique in, numquam
          explicabo porro beatae qui reprehenderit commodi magni id fugit
          voluptatem eligendi quo vel magnam! Expedita unde neque aut velit?
          Cum, ut! Nisi illum adipisci autem? Recusandae nemo, repudiandae sunt
          nisi odio nam et. Quas optio ad consequatur earum illum autem aut non
          nobis dignissimos? Illo tempora quo harum, reprehenderit aliquam
          voluptatibus voluptatem porro perspiciatis officia modi vitae eaque
          error, saepe velit adipisci, inventore laborum cum laboriosam at. Esse
          at maxime aut sit reiciendis quod. Deleniti amet optio, unde quibusdam
          totam voluptas nobis dolores aspernatur. Sint quis sapiente est, unde
          vel eum?
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Public;
