import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  background-color: #f0f0f0;
  border-radius: 4px;
  margin: 10px 0;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    margin: 0 0 10px;
    color: #333;
  }

  p {
    margin: 5px 0;
    color: #666;
  }

  img {
    max-width: 100px;
    height: auto;
    border-radius: 4px;
  }
`;

const ProductList = ({ products }) => {
  return (
    <StyledList>
      {products.map(product => (
        <StyledListItem key={product.id}>
          <h3>{product.name}</h3>
          <p>Preço: ${product.price.toFixed(2)}</p>
          <p>Categoria: {product.category}</p>
          <img src={product.imageUrl} alt={product.name} />
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default ProductList;