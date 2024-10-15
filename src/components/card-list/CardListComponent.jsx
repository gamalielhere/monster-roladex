import { Component } from "react";

class CardListComponent extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster, idx) => (
          <div key={idx + monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
        ;
      </div>
    );
  }
}

export default CardListComponent;
