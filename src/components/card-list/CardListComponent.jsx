import { Component } from "react";

import "./CardListComponent.styles.css";
import CardListItemComponent from "./components/CardListItemComponent";
class CardListComponent extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster, idx) => {
          const { id } = monster;
          return (
            <div key={idx + id}>
              <CardListItemComponent monster={monster} idx={idx} />
            </div>
          );
        })}
        ;
      </div>
    );
  }
}

export default CardListComponent;
