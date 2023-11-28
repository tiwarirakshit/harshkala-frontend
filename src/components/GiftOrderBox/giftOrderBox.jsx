const GiftBoxOrder = ({ box, product, card }) => (
  <div className="consolidated-order">
    <h3>{box.name} Gift Box</h3>

    <img src={box.img} />

    <p>Added product: {product.name}</p>

    <p>Added card: {card.name}</p>
  </div>
);

export default GiftBoxOrder;
