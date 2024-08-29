import React, { createContext, useState, useContext, useEffect } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/productService";

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError({});
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setError(null);
    const response = await getProducts();
    setProducts(response.data);
    setLoading(false);
  };

  const addProduct = async (product) => {
    setError(null);
    const response = await createProduct(product);
    setProducts([...products, response.data]);
  };

  const updateProductItem = async (id, updatedProduct) => {
    setError(null);
    const response = await updateProduct(id, updatedProduct);
    setProducts(products.map((p) => (p.id === id ? response.data : p)));
  };

  const removeProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      setError("Falha ao remover produto");
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        addProduct,
        updateProductItem,
        removeProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
