import React from 'react'

function Most_popular_products() {
  return (
    <>
<section id="popular-products" className="products-carousel">
  <div className="container-lg overflow-hidden py-5">
    <div className="row">
      <div className="col-md-12">
        <div className="section-header d-flex justify-content-between my-4">
          <h2 className="section-title">Most popular products</h2>
          <div className="d-flex align-items-center">
            <a href="#" className="btn btn-primary me-2">View All</a>
            <div className="swiper-buttons">
              <button className="swiper-prev products-carousel-prev btn btn-primary">❮</button>
              <button className="swiper-next products-carousel-next btn btn-primary">❯</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="product-item swiper-slide">
              <figure>
                <a href="index.html" title="Product Title">
                  <img src="images/product-thumb-15.png" alt="Product Thumbnail" className="tab-image" />
                </a>
              </figure>
              <div className="d-flex flex-column text-center">
                <h3 className="fs-6 fw-normal">Sandwich Bread</h3>
                <div>
                  <span className="rating">
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-half" /></svg>
                  </span>
                  <span>(222)</span>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <del>$24.00</del>
                  <span className="text-dark fw-semibold">$18.00</span>
                  <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                </div>
                <div className="button-area p-3 pt-0">
                  <div className="row g-1 mt-2">
                    <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" defaultValue={1} /></div>
                    <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width={18} height={18}><use xlinkHref="#cart" /></svg> Add to Cart</a></div>
                    <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width={18} height={18}><use xlinkHref="#heart" /></svg></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item swiper-slide">
              <figure>
                <a href="index.html" title="Product Title">
                  <img src="images/product-thumb-16.png" alt="Product Thumbnail" className="tab-image" />
                </a>
              </figure>
              <div className="d-flex flex-column text-center">
                <h3 className="fs-6 fw-normal">Honeycrisp Apples</h3>
                <div>
                  <span className="rating">
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-half" /></svg>
                  </span>
                  <span>(222)</span>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <del>$24.00</del>
                  <span className="text-dark fw-semibold">$18.00</span>
                  <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                </div>
                <div className="button-area p-3 pt-0">
                  <div className="row g-1 mt-2">
                    <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" defaultValue={1} /></div>
                    <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width={18} height={18}><use xlinkHref="#cart" /></svg> Add to Cart</a></div>
                    <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width={18} height={18}><use xlinkHref="#heart" /></svg></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item swiper-slide">
              <figure>
                <a href="index.html" title="Product Title">
                  <img src="images/product-thumb-17.png" alt="Product Thumbnail" className="tab-image" />
                </a>
              </figure>
              <div className="d-flex flex-column text-center">
                <h3 className="fs-6 fw-normal">Whole Wheat Sandwich Bread</h3>
                <div>
                  <span className="rating">
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-half" /></svg>
                  </span>
                  <span>(222)</span>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <del>$24.00</del>
                  <span className="text-dark fw-semibold">$18.00</span>
                  <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                </div>
                <div className="button-area p-3 pt-0">
                  <div className="row g-1 mt-2">
                    <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" defaultValue={1} /></div>
                    <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width={18} height={18}><use xlinkHref="#cart" /></svg> Add to Cart</a></div>
                    <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width={18} height={18}><use xlinkHref="#heart" /></svg></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item swiper-slide">
              <figure>
                <a href="index.html" title="Product Title">
                  <img src="images/product-thumb-18.png" alt="Product Thumbnail" className="tab-image" />
                </a>
              </figure>
              <div className="d-flex flex-column text-center">
                <h3 className="fs-6 fw-normal">Honeycrisp Apples</h3>
                <div>
                  <span className="rating">
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-half" /></svg>
                  </span>
                  <span>(222)</span>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <del>$24.00</del>
                  <span className="text-dark fw-semibold">$18.00</span>
                  <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                </div>
                <div className="button-area p-3 pt-0">
                  <div className="row g-1 mt-2">
                    <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" defaultValue={1} /></div>
                    <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width={18} height={18}><use xlinkHref="#cart" /></svg> Add to Cart</a></div>
                    <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width={18} height={18}><use xlinkHref="#heart" /></svg></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item swiper-slide">
              <figure>
                <a href="index.html" title="Product Title">
                  <img src="images/product-thumb-19.png" alt="Product Thumbnail" className="tab-image" />
                </a>
              </figure>
              <div className="d-flex flex-column text-center">
                <h3 className="fs-6 fw-normal">Sunstar Fresh Melon Juice</h3>
                <div>
                  <span className="rating">
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-half" /></svg>
                  </span>
                  <span>(222)</span>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <del>$24.00</del>
                  <span className="text-dark fw-semibold">$18.00</span>
                  <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                </div>
                <div className="button-area p-3 pt-0">
                  <div className="row g-1 mt-2">
                    <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" defaultValue={1} /></div>
                    <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width={18} height={18}><use xlinkHref="#cart" /></svg> Add to Cart</a></div>
                    <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width={18} height={18}><use xlinkHref="#heart" /></svg></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item swiper-slide">
              <figure>
                <a href="index.html" title="Product Title">
                  <img src="images/product-thumb-10.png" alt="Product Thumbnail" className="tab-image" />
                </a>
              </figure>
              <div className="d-flex flex-column text-center">
                <h3 className="fs-6 fw-normal">Greek Style Plain Yogurt</h3>
                <div>
                  <span className="rating">
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-half" /></svg>
                  </span>
                  <span>(222)</span>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <del>$24.00</del>
                  <span className="text-dark fw-semibold">$18.00</span>
                  <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                </div>
                <div className="button-area p-3 pt-0">
                  <div className="row g-1 mt-2">
                    <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" defaultValue={1} /></div>
                    <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width={18} height={18}><use xlinkHref="#cart" /></svg> Add to Cart</a></div>
                    <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width={18} height={18}><use xlinkHref="#heart" /></svg></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item swiper-slide">
              <figure>
                <a href="index.html" title="Product Title">
                  <img src="images/product-thumb-11.png" alt="Product Thumbnail" className="tab-image" />
                </a>
              </figure>
              <div className="d-flex flex-column text-center">
                <h3 className="fs-6 fw-normal">Pure Squeezed No Pulp Orange Juice</h3>
                <div>
                  <span className="rating">
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-half" /></svg>
                  </span>
                  <span>(222)</span>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <del>$24.00</del>
                  <span className="text-dark fw-semibold">$18.00</span>
                  <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                </div>
                <div className="button-area p-3 pt-0">
                  <div className="row g-1 mt-2">
                    <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" defaultValue={1} /></div>
                    <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width={18} height={18}><use xlinkHref="#cart" /></svg> Add to Cart</a></div>
                    <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width={18} height={18}><use xlinkHref="#heart" /></svg></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item swiper-slide">
              <figure>
                <a href="index.html" title="Product Title">
                  <img src="images/product-thumb-12.png" alt="Product Thumbnail" className="tab-image" />
                </a>
              </figure>
              <div className="d-flex flex-column text-center">
                <h3 className="fs-6 fw-normal">Fresh Oranges</h3>
                <div>
                  <span className="rating">
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-half" /></svg>
                  </span>
                  <span>(222)</span>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <del>$24.00</del>
                  <span className="text-dark fw-semibold">$18.00</span>
                  <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                </div>
                <div className="button-area p-3 pt-0">
                  <div className="row g-1 mt-2">
                    <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" defaultValue={1} /></div>
                    <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width={18} height={18}><use xlinkHref="#cart" /></svg> Add to Cart</a></div>
                    <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width={18} height={18}><use xlinkHref="#heart" /></svg></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item swiper-slide">
              <figure>
                <a href="index.html" title="Product Title">
                  <img src="images/product-thumb-13.png" alt="Product Thumbnail" className="tab-image" />
                </a>
              </figure>
              <div className="d-flex flex-column text-center">
                <h3 className="fs-6 fw-normal">Gourmet Dark Chocolate Bars</h3>
                <div>
                  <span className="rating">
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-full" /></svg>
                    <svg width={18} height={18} className="text-warning"><use xlinkHref="#star-half" /></svg>
                  </span>
                  <span>(222)</span>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <del>$24.00</del>
                  <span className="text-dark fw-semibold">$18.00</span>
                  <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                </div>
                <div className="button-area p-3 pt-0">
                  <div className="row g-1 mt-2">
                    <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" defaultValue={1} /></div>
                    <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width={18} height={18}><use xlinkHref="#cart" /></svg> Add to Cart</a></div>
                    <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width={18} height={18}><use xlinkHref="#heart" /></svg></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* / products-carousel */}
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Most_popular_products
