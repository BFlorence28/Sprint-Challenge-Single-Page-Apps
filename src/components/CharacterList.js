import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [char, fetchChars] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = event => {
    setSearchValue(event.target.value)
  };

  const filteredChar = char.filter(chars => {
    return chars.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  });

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    console.log("CharacterList component mounted");
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(response => {
        console.log("Character: ", response.data);
        console.log("Character: ", response.data.results);
        fetchChars(response.data.results);
      })
      .catch(error => {
        console.log("Error! No information returned", error);
      })
  }, []);

  return (
    <div className="containerCards">
      <SearchForm searchValue={searchValue} handleChange={handleChange} />
      {filteredChar.map(character => {
        return (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
          />
        );
      })}
    </div>
  );
}