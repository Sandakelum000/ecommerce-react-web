import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";
  return (
    <div className="product-card" key={product.id}>
      <img
        src={product.image}
        alt={product.name}
        className="product-card-image"
      />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">LKR {product.price}</p>
        <div className="product-card-actions">
          <Link className="btn btn-primary" to={`/products/${product.id}`}>
            View Details
          </Link>
          <button
            className="btn btn-secondary"
            onClick={() => addToCart(product.id)}
          >
            Add to cart {productQuantityLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
