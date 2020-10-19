import React from 'react';
import styled from 'styled-components';

const Button = React.memo(styled.button`
  font-family: 'Karla', sans-serif;
  background-color: white;
  border: ${({ border }) => (border ? '2px solid black' : 'none')};
  border-radius: ${({ border }) => (border ? '8px' : null)};
  font-size: 1rem;
  padding: ${({ border }) => (border ? '1rem' : '0')};
`);

export default Button;
