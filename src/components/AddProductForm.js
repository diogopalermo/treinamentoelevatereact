import React, { useState } from "react";
import { useProducts } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import StyledButton from "./StyledButton";
import styled from "styled-components";


const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
  font-size: 0.9em;
`;

const AddProductForm = () => {
  const [product, setProduct] = useState({
    nome: "",
    preco: "",
    categoria: {
      id: "",
      descricao: "",
    },
  });

  const { addProduct } = useProducts();
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "categoriaId" || name === "categoriaDescricao") {
      setProduct((prevProduct) => ({
        ...prevProduct,
        categoria: {
          ...prevProduct.categoria,
          [name === "categoriaId" ? "id" : "descricao"]: value,
        },
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]); // Limpa erros anteriores
    const newProduct = {
      ...product,
      preco: parseFloat(product.preco),
      categoria: {
        id: product.categoria.id,
        descricao: product.categoria.descricao,
      },
    };

    try {
      await addProduct(newProduct);
      // Reset form
      setProduct({
        nome: "",
        preco: "",
        categoria: {
          id: "",
          descricao: "",
        },
      });
      navigate("/products");
    } catch (error) {
      if (error.response && error.response.data) {
        error.response.data.forEach(error => {
          setErrors(error);
        });
      } else {
        setErrors({
          general:
            "Ocorreu um erro ao adicionar o produto. Por favor, tente novamente.",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors && <ErrorMessage>{errors.errorMsg}</ErrorMessage>}
      <input
        type="text"
        name="nome"
        value={product.nome}
        onChange={handleChange}
        placeholder="Nome do Produto"
        required
      />

      <input
        type="number"
        name="preco"
        value={product.preco}
        onChange={handleChange}
        placeholder="Preço"
        step="0.01"
        required
      />
      <input
        type="text"
        name="categoriaId"
        value={product.categoria.id}
        onChange={handleChange}
        placeholder="ID da Categoria"
        required
      />
      <input
        type="text"
        name="categoriaDescricao"
        value={product.categoria.descricao}
        onChange={handleChange}
        placeholder="Descrição da Categoria"
        required
      />
      <StyledButton type="button" onClick={handleSubmit} primary>
        Adicionar Produto
      </StyledButton>
    </form>
  );
};

export default AddProductForm;
