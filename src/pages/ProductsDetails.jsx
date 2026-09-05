import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { useCart } from "../Context/CartContext";

export default function ProductsDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();
  

  useEffect(() => {
    const findProduct = getProductById(id);
    if (!findProduct) {
      navigate("/");
      return;
    }

    setProduct(findProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";


  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product} />
          </div>
          <div className="product-detail-content">
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-price">{product.price}</p>
            <p className="product-detail-description">{product.description}</p>
            <button className="btn btn-primary" onClick={() => addToCart(product.id)}>
              Add To Cart {productQuantityLabel}
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
