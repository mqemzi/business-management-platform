import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';
import ProductAdd from './components/ProductAdd';
import OrderManagement from './components/OrderManagement';
import FinancialReport from './components/FinancialReport';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Switch>
            <ProtectedRoute path="/orders" component={OrderManagement} />
            <ProtectedRoute path="/financial-report" component={FinancialReport} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <Route path="/products/add" component={ProductAdd} />
            <Route path="/products/:productId" component={ProductDetails} />
            <Route path="/register" component={UserRegistration} />
            <Route path="/login" component={UserLogin} />
            <Route path="/" component={ProductList} />
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
};

export default App;
