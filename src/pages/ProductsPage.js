import React from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import ErrorBoundary from "../components/ErrorBoundary";
import BuggyCounter from "../components/BuggyCounter";
import ErrorFallback from "../components/ErrorFallback";
import ComponentThatMayError from "../components/ComponentThatMayError";

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 699.99,
      category: "Eletrônicos",
      imageUrl: "https://example.com/smartphone.jpg",
    },
    {
      id: 2,
      name: "Laptop",
      price: 1299.99,
      category: "Eletrônicos",
      imageUrl: "https://example.com/laptop.jpg",
    },
    {
      id: 3,
      name: "Camiseta",
      price: 29.99,
      category: "Roupas",
      imageUrl: "https://example.com/tshirt.jpg",
    },
  ];

  return (
    <div>
      <div>
        <h1>Nossos Produtos</h1>
        <ErrorBoundary>
          <ProductGrid>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </ErrorBoundary>
      </div>
      <div>
        <h1>Teste de Error Boundary</h1>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <BuggyCounter />
          <ComponentThatMayError />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default ProductsPage;
