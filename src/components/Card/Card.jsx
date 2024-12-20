import './Card.css'

export const Card = ({title, price, address, date, img}) => {
  return (
    <a href="product.html" className="card">
      <div className="card--img">
        <img src={img} alt="" />
      </div>
      <h5 className="card--title">{title}</h5>
      <strong className="card--price">{price}</strong>
      <div className="card--desk-box">
        <span className="card--desk">
        {address}
        </span>
        <span className="card--desk">{date}</span>
      </div>
    </a>
  );
};
