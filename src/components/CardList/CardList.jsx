import React from "react";
import { Card } from "../Card/Card";

export const CardList = ({ characters }) => {

  return (
    <section className="flex flex-wrap justify-center">
      {characters.map((per, ind) => (
        <Card key={ind} personaje={per} />
      ))}
    </section>
  );
};
