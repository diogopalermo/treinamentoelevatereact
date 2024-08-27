import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-right: 15px;
  &:hover, &.active {
    text-decoration: underline;
  }
`;

const Navigation = () => {
  return (
    <NavBar>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/products">Produtos</StyledNavLink>
      <StyledNavLink to="/categories">Categorias</StyledNavLink>
    </NavBar>
  );
};

export default Navigation;