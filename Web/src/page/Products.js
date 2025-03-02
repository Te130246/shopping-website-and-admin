import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faStar as faStarSolid, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product);
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (products.length === 0) {
    return <div>No products available at the moment.</div>;
  }

  return (
    <section className="pb-5">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex flex-wrap justify-content-between my-4">
              <h2 className="section-title">Best selling products</h2>
              <div className="d-flex align-items-center">
                <a href="#" className="btn btn-primary rounded-1">View All</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
              {products.map((product) => (
                <div className="col" key={product.id}>
                  <div className="product-item">
                    <figure>
                      <Link to={`/product/${product.id}`} title={product.title}>
                        <img
                          src={product.image}
                          alt={`Image of ${product.title}`}
                          className="tab-image"
                        />
                      </Link>
                    </figure>
                    <div className="d-flex flex-column text-center">
                      <h3 className="fs-6 fw-normal">{product.title}</h3>
                      <div>
                        <span className="rating">
                          {Array.from({ length: 5 }, (_, index) => {
                            if (index < Math.floor(product.rating)) {
                              return (
                                <FontAwesomeIcon key={index} icon={faStarSolid} className="text-warning" />
                              );
                            } else if (index < product.rating) {
                              return (
                                <FontAwesomeIcon key={index} icon={faStarHalfAlt} className="text-warning" />
                              );
                            } else {
                              return (
                                <FontAwesomeIcon key={index} icon={faStarRegular} className="text-secondary" />
                              );
                            }
                          })}
                        </span>
                        <span>({product.rating})</span>
                      </div>
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <del>${product.original_price}</del>
                        <span className="text-dark fw-semibold">${product.discounted_price}</span>
                        <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
                          {product.discount}% OFF
                        </span>
                      </div>
                      <div className="button-area p-3 pt-0">
                        <div className="row g-1 mt-2">
                          <div className="col-3">
                            <input
                              type="number"
                              name="quantity"
                              className="form-control border-dark-subtle input-number quantity"
                              defaultValue={1}
                            />
                          </div>
                          <div className="col-7">
                            <a
                              href="#"
                              className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"
                              onClick={() => handleAddToCart(product)}
                            >
                              <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                            </a>
                          </div>
                          <div className="col-2">
                            <a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6">
                              <FontAwesomeIcon icon={faHeart} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
