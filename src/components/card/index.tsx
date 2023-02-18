import { Card } from "@mui/material";
import React, { useRef } from "react";

import { RickAndMortyTypes } from "interfaces";

import "./style.scss";

interface ICard {
  isBox?: boolean;
  text: string;
  styles?: string;
  isChar?: boolean;
  char?: RickAndMortyTypes;
}

export const Article: React.FC<ICard> = ({
  isBox,
  text,
  styles,
  isChar,
  char,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const startAnimation = () => {
    const wrapper = ref.current;
    if (wrapper) {
      wrapper.classList.toggle("animation");
    }
  };

  const startAnimFrameAnimation = () => {
    console.log(ref.current?.clientWidth);
    const maxXPosition =
      document.querySelector("article")!.offsetWidth -
      ref.current!.clientWidth -
      20;
    const block = ref.current;
    let speedX = 3;
    let positionX = 0;
    let start: null | number = null;

    function step(time: number) {
      requestAnimationFrame(step);
      let timestamp: number | null = time - (start || time);
      if (timestamp > maxXPosition) {
        timestamp = null;
      }
      start = time;
      positionX += speedX * ((timestamp as number) / 1000) * 120;
      if (positionX > maxXPosition) {
        speedX *= -1;
        positionX = maxXPosition;
      } else if (positionX < 0) {
        speedX *= -1;
        positionX = 0;
      }
      block!.style.transform = `translateX(${positionX}px)`;
    }

    requestAnimationFrame(step);
  };
  return (
    <Card
      component="article"
      className="article"
      style={{ backgroundColor: "#D1B2FF", minHeight: 210 }}
    >
      {!isBox ? (
        text
      ) : (
        <div
          onClick={styles === "rAF" ? startAnimFrameAnimation : startAnimation}
          ref={ref}
          className={`article--box ${styles}`}
        ></div>
      )}
      {isChar && !isBox && (
        <div className="article--character">
          <img
            className="article--character_image"
            src={char?.image}
            alt="char"
          />
          <p className="article--character_name">{char?.name}</p>
        </div>
      )}
    </Card>
  );
};
