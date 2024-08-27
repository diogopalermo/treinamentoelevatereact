import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProductContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProductName = styled.h1`
  color: #333;
`;
const ProductId = styled.h1`
  color: #333;
`;
const ProductPrice = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: #4a4a4a;
`;

const ProductCategory = styled.p`
  color: #888;
`;

const ProductDetailPage = () => {
  const { id } = useParams();

  // Simule a busca de dados do produto
  // Em uma aplicação real, você buscaria esses dados de uma API
  const product = {
    id: id,
    name: "Produto Exemplo",
    price: 99.99,
    category: "Categoria Exemplo",
    imageUrl: "https://example.com/product.jpg",
    description: "Esta é uma descrição detalhada do produto.",
  };

  return (
    <ProductContainer>
      <ProductImage src={product.imageUrl} alt={product.name} />
      <ProductName>{product.id} - {product.name}</ProductName>
      <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
      <ProductCategory>{product.category}</ProductCategory>
      <p>{product.description}</p>
    </ProductContainer>
  );
};

export default ProductDetailPage;
