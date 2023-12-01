export default function InventoryCard({ list, onClick }) {
  return (
    <div className="Inventory-Container">
      {list.map((l) => (
        <div key={l.id} className="Inventory-Card">
          <img src={l.image} />
          <h2>{l.productName}</h2>
          <h3>{l.brand}</h3>
          <p>{l.quantity}</p>
          <p>
            <strong>{l.price}</strong>
          </p>
          {/* <div className="counter-container">
            <div className="counter-button" onClick={subtractCounter}>
              <span>-</span>
            </div>
            <span>{counter}</span>
            <div className="counter-button" onClick={addCounter}>
              <span>+</span>
            </div>
          </div> */}
          <button onClick={() => onClick(l)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
