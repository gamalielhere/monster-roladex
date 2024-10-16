import CardListItemComponent from "./components/CardListItemComponent";
import "./CardListComponent.styles.css";

const CardListComponent = ({ monsters }) => {
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
};
export default CardListComponent;
