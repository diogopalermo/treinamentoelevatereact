import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import NewProductPage from './pages/NewProductPage';
import CategoriesPage from './pages/CategoriesPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/products/new" element={<NewProductPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          
            <Route path="/categories" element={<CategoriesPage />} />
          </Route>
          
        </Routes>
      </Router>
    </ProductProvider>
  );
};

export default App;