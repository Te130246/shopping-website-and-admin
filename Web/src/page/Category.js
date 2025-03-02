import React, { useEffect } from 'react';
import Swiper from 'swiper'; // นำเข้า Swiper
import 'swiper/swiper-bundle.css'; // นำเข้า CSS ของ Swiper
import './Category.css'; // ไฟล์ CSS ของคุณ

function Category() {
  useEffect(() => {
    // สร้าง Swiper instance
    const swiper = new Swiper('.category-carousel', {
      slidesPerView: 'auto', // แสดงหลายสไลด์
      spaceBetween: 15, // ระยะห่างระหว่างสไลด์
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
    });
  }, []);

  return (
    <>
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex flex-wrap justify-content-between mb-5">
              <h2 className="section-title">Category</h2>
              <div className="d-flex align-items-center">
                <a href="#" className="btn btn-primary me-2">View All</a>
                <div className="swiper-buttons">
                  <button className="swiper-prev category-carousel-prev btn btn-yellow">❮</button>
                  <button className="swiper-next category-carousel-next btn btn-yellow">❯</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="category-carousel swiper">
              <div className="swiper-wrapper">
                <a href="category.html" className="nav-link swiper-slide text-center">
                  <img src="images/category-thumb-1.jpg" className="rounded-circle" alt="Category Thumbnail" />
                  <h4 className="fs-6 mt-3 fw-normal category-title">Fruits &amp; Veges</h4>
                </a>
                <a href="category.html" className="nav-link swiper-slide text-center">
                  <img src="images/category-thumb-2.jpg" className="rounded-circle" alt="Category Thumbnail" />
                  <h4 className="fs-6 mt-3 fw-normal category-title">Breads &amp; Sweets</h4>
                </a>
                <a href="category.html" className="nav-link swiper-slide text-center">
                  <img src="images/category-thumb-3.jpg" className="rounded-circle" alt="Category Thumbnail" />
                  <h4 className="fs-6 mt-3 fw-normal category-title">Fruits &amp; Veges</h4>
                </a>
                <a href="category.html" className="nav-link swiper-slide text-center">
                  <img src="images/category-thumb-4.jpg" className="rounded-circle" alt="Category Thumbnail" />
                  <h4 className="fs-6 mt-3 fw-normal category-title">Beverages</h4>
                </a>
                <a href="category.html" className="nav-link swiper-slide text-center">
                  <img src="images/category-thumb-5.jpg" className="rounded-circle" alt="Category Thumbnail" />
                  <h4 className="fs-6 mt-3 fw-normal category-title">Meat Products</h4>
                </a>
                <a href="category.html" className="nav-link swiper-slide text-center">
                  <img src="images/category-thumb-6.jpg" className="rounded-circle" alt="Category Thumbnail" />
                  <h4 className="fs-6 mt-3 fw-normal category-title">Breads</h4>
                </a>
                <a href="category.html" className="nav-link swiper-slide text-center">
                  <img src="images/category-thumb-7.jpg" className="rounded-circle" alt="Category Thumbnail" />
                  <h4 className="fs-6 mt-3 fw-normal category-title">Fruits &amp; Veges</h4>
                </a>
                <a href="category.html" className="nav-link swiper-slide text-center">
                  <img src="images/category-thumb-8.jpg" className="rounded-circle" alt="Category Thumbnail" />
                  <h4 className="fs-6 mt-3 fw-normal category-title">Breads &amp; Sweets</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
