import React, { useCallback, useEffect, useState } from "react";

import { Article } from "components";

import "./style.scss";
import { getCharacters } from "api/characters";
import { IUser, RickAndMortyTypes } from "interfaces";
import { useCharacter } from "hooks/useCharacter";
import { useSelector } from "react-redux";

interface IArr {
  text: string;
  id: number;
}

const arr: Array<IArr> = [];

for (let i = 0; i < 10; i++) {
  arr.push({
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Exercitationem at mollitia explicabo vero rem asperiores dolorum debitis eum ipsam. Animi magnam voluptates officia veniam aut, odit repellat tenetur minima suscipit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem at mollitia explicabo vero rem asperiores dolorum debitis eum ipsam. Animi magnam voluptates officia veniam aut, odit repellat tenetur minima suscipit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem at mollitia explicabo vero rem asperiores dolorum debitis eum ipsam. Animi magnam voluptates officia veniam aut, odit repellat tenetur minima suscipit?",
    id: i,
  });
}

export const Content = () => {
  const [characters, setCharacters] = useState<RickAndMortyTypes[]>([
    {
      id: 0,
      name: "",
      image: "",
    },
  ]);
  const { user } = useSelector((state: IUser) => state.userReducer);

  const { character } = useCharacter();

  const fetchCharacters = useCallback(async () => {
    try {
      const { data } = await getCharacters([1, 2, 3, 4]);
      setCharacters(data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  console.log(user);

  return (
    <section className="content">
      {arr.map((el) => (
        <Article key={el.id} isBox={false} text={el.text} />
      ))}
      <Article isBox={true} text="CSS Animation" styles="animation" />
      <Article isBox={true} text="JS Animation" />
      <Article isBox={true} text="rAF Animation" styles="rAF" />
      {characters.map((char) => (
        <Article key={char.id} char={char} isChar={true} text="" />
      ))}
      {character &&
        character.map((char: RickAndMortyTypes) => (
          <Article key={char.id} char={char} isChar={true} text="" />
        ))}
      {user.firstName !== null && (
        <Article
          isBox={false}
          text={`Name: ${user.firstName} Lastname: ${user.lastName}`}
        />
      )}
    </section>
  );
};
