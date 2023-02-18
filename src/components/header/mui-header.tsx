import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useCallback, useEffect, useState } from "react";

import { Autocomplete } from "components";
import { RickAndMortyTypes } from "interfaces";
import { getCharacterByName, getCharacters } from "api/characters";
import { useCharacter } from "hooks/useCharacter";

export const SearchAppBar = () => {
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
  }, [fetchAllCharacters]);

  const getSingleCharacter = useCallback(async () => {
    try {
      if (autocompleteValue.length !== 0) {
        const { data } = await getCharacterByName(autocompleteValue);
        setCharacter(data.results);
      }
    } catch (e) {
      console.log(e);
    }
  }, [autocompleteValue, setCharacter]);

  useEffect(() => {
    characters.length !== 1 &&
      characters.forEach((char) =>
        setCharactersNames((prevValue) => [...prevValue, char.name])
      );
  }, [characters]);

  useEffect(() => {
    autocompleteValue.length !== 0 && getSingleCharacter();
  }, [autocompleteValue, getSingleCharacter]);
  return (
    <Box component="header" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { sm: "block" } }}
          >
            TEMPLATE
          </Typography>
          <Autocomplete
            options={charactersNames}
            name={"Characters"}
            onChangeInput={setAutocompleteValue}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
