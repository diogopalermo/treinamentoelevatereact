import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import StyledButton from '../components/StyledButton';
import { useProducts } from '../context/ProductContext';

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductsPage = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>ERROR{error}</div>;

  return (
    <div>
      <h1>Nossos Produtos</h1>
      <StyledButton primary to="/products/new">Novo Produto</StyledButton>
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </div>
  );
};

export default ProductsPage;