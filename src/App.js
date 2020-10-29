import React, { useState } from "react";
import ListaCarti from "./listacarti.js";
import Adaug from "./adaug";

const App = () => {
  const [lista, setLista] = useState([]);

  const adaug = (carte) => {
    carte.id = lista.length + 1;
    setLista([...lista, carte]);
  };

  return (
    <>
      <ListaCarti listaCarti={lista} />
      <Adaug transmit={adaug} />
    </>
  );
};

export default App;
