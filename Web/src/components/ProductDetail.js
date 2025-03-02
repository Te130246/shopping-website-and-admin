import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faStar as faStarSolid, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
        setError('Failed to load product details. Please try again later.');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <div className="row">
          <div className="col-md-6">
            <img src={product.image} alt={product.title} className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">{product.title}</h2>
            <p className="text-primary fw-semibold">หมวดหมู่ : {product.category}</p> {/* แสดงหมวดหมู่ */}
            <div className="mb-3">
              <span className="rating">
                {Array.from({ length: 5 }, (_, index) => {
                  if (index < Math.floor(product.rating)) {
                    return <FontAwesomeIcon key={index} icon={faStarSolid} className="text-warning" />;
                  } else if (index < product.rating) {
                    return <FontAwesomeIcon key={index} icon={faStarHalfAlt} className="text-warning" />;
                  } else {
                    return <FontAwesomeIcon key={index} icon={faStarRegular} className="text-secondary" />;
                  }
                })}
              </span>
              <span> ({product.rating})</span>
            </div>
            <p className="text-muted">{product.description}</p> {/* แสดง description */}
            <div className="d-flex align-items-center gap-3">
              <del className="text-muted">${product.original_price}</del>
              <span className="text-danger fw-bold">${product.discounted_price}</span>
              <span className="badge bg-success">{product.discount}% OFF</span>
            </div>
            <div className="mt-4">
              <button className="btn btn-primary me-2">
                <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
              </button>
              <button className="btn btn-outline-dark">
                <FontAwesomeIcon icon={faHeart} /> Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
