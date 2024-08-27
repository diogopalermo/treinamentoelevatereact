import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 200px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const ProductName = styled.h3`
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  color: #4a4a4a;
`;

const ProductCategory = styled.p`
  color: #888;
`;

const ViewDetailsButton = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ProductImage src={product.imageUrl} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>R${product.price.toFixed(2)}</ProductPrice>
      <ProductCategory>{product.category}</ProductCategory>
      <ViewDetailsButton to={`/product/${product.id}`}>
        Ver Detalhes
      </ViewDetailsButton>
    </Card>
  );
};

export default ProductCard;