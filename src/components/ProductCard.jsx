import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card" key={product.id}>
      <img src={product.image} className="product-card-image" />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">LKR ${product.price}</p>
        <div className="product-card-actions">
          <Link className="btn btn-primary">View Details</Link>
          <button className="btn btn-secondary">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
