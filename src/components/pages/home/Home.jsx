import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="container_home">
      {/* <div className="home_text">
        <h1 className="title_home">
          <span>Mapa das</span> Milhas
        </h1>
      </div> */}
      <div className="home_img">
        <img src="/mapa.avif" alt="foto Raphael" />
      </div>
    </div>
  );
};

export default Home;
