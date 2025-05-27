# Business Management Platform

This project is a comprehensive business management platform that integrates various functionalities to manage different aspects of a business. It covers user management, product inventory, order management, financial reporting, and a dynamic dashboard.

## Features

- **User Management**: Registration and authentication using Formik and Yup.
- **Product Inventory**: Add, edit, delete, and view products with data fetched from the Fake Store API.
- **Order Management**: Create, view, and manage orders.
- **Financial Reporting**: Visualize data using Chart.js and generate reports in PDF format.
- **Dashboard**: Display key business metrics using dynamic charts.
- **Routing and Protected Routes**: Implemented using React Router and Context API.
- **Data Persistence**: User sessions and order details are stored in local storage.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone (https://github.com/mqemzi/business-management-platform)
   cd business-management-platform
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```

## Wireframe Description

### Main Navigation (Sidebar or Top Menu)
- **Login / Register**:
  - Accessible to unauthenticated users.
  - Provides links to login and register pages.
- **Dashboard**:
  - Overview of key business metrics.
  - Includes widgets or cards for metrics like total users, orders, products, and sales.
- **Orders**:
  - Manage orders (create, edit, delete, view).
  - Features a table listing orders with actions for each order.
- **Products**:
  - Manage products (add, edit, delete, view).
  - Displays a product list or table with options to edit or delete each product.
- **Users**:
  - Manage users (view, block).
  - Features a user table with action buttons for user management.

### Page Layouts

1. **Login/Register Page**:
   - Simple form layout centered on the page.
   - **Form**:
     - **Username/Email, Password Fields**: Input fields for users to enter their credentials.
     - **Register Link**: A link for new users to register if they don't have an account.
     - **Validation**: Utilizes Formik for form state management and Yup for input validation to ensure correct data entry.
   - **User Experience**:
     - Real-time validation feedback is provided as users fill out the form.
     - Error messages guide users to correct invalid inputs before submission.
   - Includes fields for Username/Email and Password.
   - A submit button and a link to switch between Login and Register.

2. **Dashboard Page**:
   - A sidebar or top menu for navigation.
   - Main content area with a grid layout displaying cards or widgets for each metric (Users, Orders, Products, Sales).
   - Graph/Chart area below or alongside metrics.

3. **Orders Page**:
   - A table listing orders with columns for Order ID, Product, Customer, Status, Actions.
   - Button to create a new order, opening a form in a modal or new page.

4. **Products Page**:
   - Similar to Orders Page, with a table listing products.
   - Each product entry has options to edit or delete.

5. **Users Page**:
   - Table format showing user details.
   - Action buttons to block/unblock users.

## Use Cases

1. **User Registration and Authentication**
   - **Actors**: Visitor
   - **Description**: A visitor can create an account using a registration form. After registration, the user can log in using their credentials. Once logged in, the user has access to the dashboard and other protected routes.
   - **Preconditions**: Visitor has internet access and can reach the registration page.
   - **Postconditions**: User is registered and logged in, redirecting to the dashboard.

2. **Add/Edit Product**
   - **Actors**: Admin/User
   - **Description**: An admin can add new products or edit existing product details. The form includes fields like product name, price, description, and category. Changes are validated and then stored in the system.
   - **Preconditions**: User must be authenticated and have admin rights.
   - **Postconditions**: Product is added or updated in the product list.

3. **Manage Orders**
   - **Actors**: Admin/User
   - **Description**: Users can create new orders, view existing orders, and delete orders. Each order includes product information, customer details, and order status. The user can access a form to create/edit orders or a table to view/delete orders.
   - **Preconditions**: User must be authenticated.
   - **Postconditions**: Orders are created, viewed, or deleted from the system.

4. **View Dashboard Metrics**
   - **Actors**: User/Admin
   - **Description**: After logging in, users are redirected to the dashboard, which displays various business metrics such as the total number of users, orders, products, and total sales. This helps in monitoring the business performance.
   - **Preconditions**: User is logged in.
   - **Postconditions**: User views the dashboard with real-time data metrics.

5. **Block/Unblock Users**
   - **Actors**: Admin
   - **Description**: Admins can view a list of users and block or unblock them to control access to the platform. A blocked user cannot log in until unblocked.
   - **Preconditions**: Admin is logged in and navigates to the Users page.
   - **Postconditions**: User is blocked/unblocked successfully.

6. **Data Persistence**
   - **Actors**: System
   - **Description**: User sessions, product data, and order details are stored in local storage to maintain state across page reloads or browser closures. This ensures a better user experience.
   - **Preconditions**: User interacts with the system, updating sessions, products, or orders.
   - **Postconditions**: Data is saved in local storage and retrieved upon subsequent interactions.

## Technologies Used

- React
- Formik & Yup
- Chart.js
- jsPDF
- TailwindCSS
- React Router
- Fake Store API

## License

This project is licensed under the MIT License.
