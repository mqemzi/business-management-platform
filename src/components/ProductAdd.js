import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ProductAdd = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      description: '',
      image: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Required'),
      price: Yup.number()
        .required('Required')
        .positive('Price must be positive'),
      description: Yup.string()
        .required('Required'),
      image: Yup.string()
        .url('Invalid URL')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      // Here you would typically handle the API call to add the product
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />
      {formik.touched.title && formik.errors.title ? (
        <div>{formik.errors.title}</div>
      ) : null}

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.price}
      />
      {formik.touched.price && formik.errors.price ? (
        <div>{formik.errors.price}</div>
      ) : null}

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
      />
      {formik.touched.description && formik.errors.description ? (
        <div>{formik.errors.description}</div>
      ) : null}

      <label htmlFor="image">Image URL</label>
      <input
        id="image"
        name="image"
        type="url"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.image}
      />
      {formik.touched.image && formik.errors.image ? (
        <div>{formik.errors.image}</div>
      ) : null}

      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductAdd;
