import React from "react";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the Rick and Morty Universe!!!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <div>
          <Link to={`/`}>
            <a href="">Home</a>
          </Link>
        </div>
        <div>
          <Link to={`/CharacterList`}>
            <a href="">Characters Library</a>
          </Link>
        </div>
      </header>
    </section>
  );
}