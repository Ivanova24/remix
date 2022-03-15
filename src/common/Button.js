import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.primary ? `var(--c-primary)` : "#ffffff")};
  font-size: var(--font-size-body);
  font-family: var(--font-body);
  border-color: transparent;
  color: var(--color-white);
  padding: 1.9rem 1.9rem;
  max-width: 23.6rem;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
  
  span {
    font-weight: 400;
  }
  &:hover {
    border: medium solid var(--color-tertiary);
    background-color: var(--color-secondary);
    color: var(--color-tertiary);
    transition: all 0.5s ease;
  }
`;

export default Button; 