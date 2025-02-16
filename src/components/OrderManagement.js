import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const OrderManagement = () => {
  const [orders, setOrders] = React.useState(() => {
    // Retrieve orders from local storage
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    // Save orders to local storage
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const formik = useFormik({
    initialValues: {
      product: '',
      quantity: 1,
    },
    validationSchema: Yup.object({
      product: Yup.string()
        .required('Required'),
      quantity: Yup.number()
        .required('Required')
        .min(1, 'Quantity must be at least 1'),
    }),
    onSubmit: values => {
      // Add the order to the list
      setOrders([...orders, values]);
    },
  });

  const handleDeleteOrder = (index) => {
    setOrders(orders.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Order Management</h1>
      <img src="https://example.com/order-management-image.jpg" alt="Order Management" />
      <form onSubmit={formik.handleSubmit}>
        <input
          name="product"
          value={formik.values.product}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Product Name"
        />
        {formik.touched.product && formik.errors.product ? (
          <div>{formik.errors.product}</div>
        ) : null}

        <input
          name="quantity"
          type="number"
          value={formik.values.quantity}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Quantity"
          min="1"
        />
        {formik.touched.quantity && formik.errors.quantity ? (
          <div>{formik.errors.quantity}</div>
        ) : null}

        <button type="submit">Add Order</button>
      </form>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            {order.product} - Quantity: {order.quantity}
            <button onClick={() => handleDeleteOrder(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderManagement;
