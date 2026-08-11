import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/products";

export default function ProductsDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const findProduct = getProductById(id);
    if (!findProduct) {
      navigate("/");
      return;
    }

    setProduct(findProduct);
  }, [id]);

  if(!product){
    return <div>Loading...</div>
  }

  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
            <div className="product-detail-image">
                <img src={product.image} alt={product}/>
            </div>
            <div className="product-detail-content">
                <h1 className="product-detail-name">{product.name}</h1>
                <p className="product-detail-price">{product.price}</p>
                 <p className="product-detail-description">{product.description}</p>
                 <button className="btn btn-primary">Add To Cart</button>
            </div>
        </div>
      </div>
    </div>
  );
}
