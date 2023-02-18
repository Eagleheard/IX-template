import { axiosInstanse } from "api";

export const getCharacters = (id?: number | string | Array<number>) => {
  return axiosInstanse.get(
    id
      ? `https://rickandmortyapi.com/api/character/${id}`
      : "https://rickandmortyapi.com/api/character"
  );
};

export const getCharacterByName = (name: string) => {
  return axiosInstanse.get(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );
};
