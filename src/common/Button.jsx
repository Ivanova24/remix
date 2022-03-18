import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.primary ? `var(--c-primary)` : `var(--c-secondary)`)};
  font-family: ${(props) => (props.primary ? `var(--ff-heading)` : `var(--ff-text)`)};
  color: ${(props) => (props.primary ? `var(--c-title)` : `var(--c-white)`)};
  font-size: var(--fs-body);
  border-color: transparent;
  padding: 1.8rem 2.4rem;
  border-radius: 5px;
  font-weight: 700;
  display: flex;

  svg {
    margin-right: 16px ;
  }
  
  &:hover {
    background-color: ${(props) => (props.primary ? `var(--c-btn-hprimary)` : `var(--c-bg-secondary)`)};
    color: ${(props) => (props.primary ? `var(--c-title)` : `var(--c-title)`)};
    transition: all 0.5s ease;
  }
`;

export default Button; 