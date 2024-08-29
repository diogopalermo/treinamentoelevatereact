import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled(Link)`
  background-color: ${props => props.primary ? 'blue' : 'white'};
  color: ${props => props.primary ? 'white' : 'blue'};
  padding: 10px 15px;
  border: 2px solid blue;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &:hover {
    opacity: 0.8;
  }
`;

export default StyledButton;