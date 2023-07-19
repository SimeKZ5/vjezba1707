import React, { useState } from "react";
import User from "./components/User";
import UserWithChildren from "./components/UserWithChildren";
import UserClass from "./components/UserClass";

const App = () => {
  const [korisnici, setKorisnici] = useState([
    { ime: "Korisnik 1", godine: 25 },
    { ime: "Korisnik 2", godine: 30 },
    { ime: "Korisnik 3", godine: 35 },
  ]);
  const [proizvoljnaVrijednost, setProizvoljnaVrijednost] = useState(
    "Proizvoljna vrijednost iz stanja"
  );

  const promijeniGodineKorisnik1 = () => {
    setKorisnici((prevKorisnici) => {
      const updatedKorisnici = [...prevKorisnici];
      updatedKorisnici[0] = {
        ...updatedKorisnici[0],
        godine: updatedKorisnici[0].godine + 1,
      };
      return updatedKorisnici;
    });
  };

  const promijeniGodineKorisnik2 = () => {
    setKorisnici((prevKorisnici) => {
      const updatedKorisnici = [...prevKorisnici];
      updatedKorisnici[1] = {
        ...updatedKorisnici[1],
        godine: updatedKorisnici[1].godine + 1,
      };
      return updatedKorisnici;
    });
  };

  const promijeniGodineKorisnik3 = () => {
    setKorisnici((prevKorisnici) => {
      const updatedKorisnici = [...prevKorisnici];
      updatedKorisnici[2] = {
        ...updatedKorisnici[2],
        godine: updatedKorisnici[2].godine + 1,
      };
      return updatedKorisnici;
    });
  };

  const promijeniImeKorisnik1 = (newIme) => {
    setKorisnici((prevKorisnici) => {
      const updatedKorisnici = [...prevKorisnici];
      updatedKorisnici[0] = {
        ...updatedKorisnici[0],
        ime: newIme,
      };
      return updatedKorisnici;
    });
  };

  return (
    <div>
      <h1>React Aplikacija</h1>
      <UserClass ime={korisnici[0].ime} godine={korisnici[0].godine} />
      <User ime={korisnici[1].ime} godine={korisnici[1].godine} />
      <UserWithChildren ime={korisnici[2].ime} godine={korisnici[2].godine}>
        <p>{proizvoljnaVrijednost}</p>
      </UserWithChildren>
      <button onClick={promijeniGodineKorisnik1}>Promijeni godinu</button>
      <button onClick={promijeniGodineKorisnik2}>Promijeni godinu</button>
      <button onClick={promijeniGodineKorisnik3}>Promijeni godinu</button>
      <input
        type="text"
        value={korisnici[0].ime}
        onChange={(e) => promijeniImeKorisnik1(e.target.value)}
      />
    </div>
  );
};

export default App;
