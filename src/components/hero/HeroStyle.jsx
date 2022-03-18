import styled from "styled-components";
import { respondTo } from "../../common/_respondTo";

export const Header = styled.header`
  padding: 40px var(--wrapper) 150px;
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  right: ${props => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  ${respondTo.md`
  flex-directon: row; 
  align-items: center;
  margin-left: 3.2rem;
  `}
`;

export const Links = styled.div`
  margin-right: auto;

  ul {
    display: flex;
    column-gap: 2.4rem;

    a {
      color: var(--c-text);
    }

    a:hover {
      outline: medium solid var(--c-primary);
      outline-offset: 5px;
    }
  }
`;

export const LinksCta = styled.div`
  display: flex;
  column-gap: 2.4rem;
  align-items: center;

  a {
    color: var(--c-text);
  }

  a:hover {
    outline: medium solid var(--c-primary);
    outline-offset: 5px;
  }
`;

// export const ToggleMode = styled.div`
//   background-color: hsl(220deg 8% 91% / 99%);
//   width: 212px;
//   height: 59px;
// `;



