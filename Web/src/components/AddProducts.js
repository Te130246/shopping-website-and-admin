import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  const [formData, setFormData] = useState({
    title: '',
    rating: '',
    original_price: '',
    discounted_price: '',
    discount: '',
    description: '',
    category: '', // เพิ่ม category
  });

  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('rating', parseFloat(formData.rating));
    data.append('original_price', parseFloat(formData.original_price));
    data.append('discounted_price', parseFloat(formData.discounted_price));
    data.append('discount', parseInt(formData.discount, 10));
    data.append('description', formData.description);
    data.append('category', formData.category); // เพิ่ม category
    if (image) {
      data.append('image', image);
    }

    axios.post('http://localhost:5000/api/products', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        setMessage('Product added successfully!');
        setFormData({
          title: '',
          rating: '',
          original_price: '',
          discounted_price: '',
          discount: '',
          description: '',
          category: '', // ล้างค่า category
        });
        setImage(null);
      })
      .catch((error) => {
        console.error('Error adding product:', error);
        setMessage('Failed to add product!');
      });
  };

  return (
    <div className="container mt-5">
      <h2>Add New Product</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Product Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Product Image</label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={handleImageChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating</label>
          <input
            type="number"
            step="0.1"
            className="form-control"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="original_price" className="form-label">Original Price</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="original_price"
            name="original_price"
            value={formData.original_price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="discounted_price" className="form-label">Discounted Price</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="discounted_price"
            name="discounted_price"
            value={formData.discounted_price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="discount" className="form-label">Discount</label>
          <input
            type="text"
            className="form-control"
            id="discount"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
