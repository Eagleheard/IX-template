import React, { useCallback, useEffect, useState } from "react";

import { Autocomplete } from "components/autocomplete";

import "./style.scss";
import { RickAndMortyTypes } from "interfaces";
import { getCharacterByName, getCharacters } from "api/characters";
import { useCharacter } from "hooks/useCharacter";

export const Header = () => {
  const [characters, setCharacters] = useState<RickAndMortyTypes[]>([
    {
      id: 0,
      name: "",
      image: "",
    },
  ]);
  const [charactersNames, setCharactersNames] = useState<string[]>([]);
  const [autocompleteValue, setAutocompleteValue] = useState<string>("");
  const { setCharacter } = useCharacter();

  const fetchAllCharacters = useCallback(async () => {
    try {
      const { data } = await getCharacters();
      setCharacters(data.results);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  const getSingleCharacter = async () => {
    try {
      if (autocompleteValue.length !== 0) {
        const { data } = await getCharacterByName(autocompleteValue);
        setCharacter(data.results);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    characters.length !== 1 &&
      characters.forEach((char) =>
        setCharactersNames((prevValue) => [...prevValue, char.name])
      );
  }, [characters]);

  useEffect(() => {
    autocompleteValue.length !== 0 && getSingleCharacter();
  }, [autocompleteValue]);

  return (
    <header className="header">
      <h1>HEADER</h1>
      <div className="autocomplete">
        <Autocomplete
          options={charactersNames}
          name={"Characters"}
          onChangeInput={setAutocompleteValue}
        />
      </div>
    </header>
  );
};
