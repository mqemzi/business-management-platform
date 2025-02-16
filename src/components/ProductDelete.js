import React from 'react';

const ProductDelete = ({ productId, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      onDelete(productId);
      // Here you would typically handle the API call to delete the product
    }
  };

  return (
    <button onClick={handleDelete}>
      Delete Product
    </button>
  );
};

export default ProductDelete;
