import React from "react";
import User from "./components/User";
import UserWithChildren from "./components/UserWithChildren";
import UserClass from "./components/UserClass";
class App extends React.Component {
  render() {
    const korisnici = [
      { ime: "Korisnik 1", godine: 25 },
      { ime: "Korisnik 2", godine: 30 },
      { ime: "Korisnik 3", godine: 35 },
    ];

    return (
      <div>
        <h1>React Aplikacija</h1>
        <UserClass ime={korisnici[0].ime} godine={korisnici[0].godine} />
        <User ime={korisnici[1].ime} godine={korisnici[1].godine} />
        <UserWithChildren ime={korisnici[2].ime} godine={korisnici[2].godine}>
          <p>Dodatne informacije o korisniku...</p>
        </UserWithChildren>
      </div>
    );
  }
}

export default App;
