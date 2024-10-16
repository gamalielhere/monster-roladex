import "./CardListItemComponent.styles.css";

const CardListItemComponent = ({ monster, idx }) => {
  const { name, id, email } = monster;
  return (
    <div key={idx + id}>
      <div className="card-container">
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=3&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default CardListItemComponent;
