import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import LocationsList from "./components/LocationsList";
import CharacterCard from "./components/CharacterCard.js";

export default function App() {
  return (
    <main>
      <Header />

      <Route exact path="/" component={WelcomePage} />
      <Route
        exact
        path="/CharacterList"
        render={props => <CharacterList {...props} />}
      />

    </main>
  );
}
