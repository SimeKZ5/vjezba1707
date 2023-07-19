import React from "react";
import User from "./components/User";
import UserWithChildren from "./components/UserWithChildren";
import UserClass from "./components/UserClass";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      korisnici: [
        { ime: "Korisnik 1", godine: 25 },
        { ime: "Korisnik 2", godine: 30 },
        { ime: "Korisnik 3", godine: 35 },
      ],
      proizvoljnaVrijednost: "Proizvoljna vrijednost iz stanja",
    };
  }

  promijeniGodine = () => {
    this.setState({
      korisnici: this.state.korisnici.map((korisnik) => ({
        ...korisnik,
        godine: korisnik.godine + 1,
      })),
    });
  };

  render() {
    return (
      <div>
        <h1>React Aplikacija</h1>
        <UserClass
          ime={this.state.korisnici[0].ime}
          godine={this.state.korisnici[0].godine}
        />
        <User
          ime={this.state.korisnici[1].ime}
          godine={this.state.korisnici[1].godine}
        />
        <UserWithChildren
          ime={this.state.korisnici[2].ime}
          godine={this.state.korisnici[2].godine}
        >
          <p>{this.state.proizvoljnaVrijednost}</p>
        </UserWithChildren>
        <button onClick={this.promijeniGodine}>Promijeni godinu</button>
      </div>
    );
  }
}

export default App;
