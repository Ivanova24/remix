import styled from 'styled-components';
import { respondTo } from "../../common/_respondTo";

export const HeroHeader = styled.header`
  padding: 40px var(--wrapper) 150px;
`;

export const HeroNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeroLinks = styled.div`
   ul {
    display: flex;
    column-gap: 2.4rem;

    a {
      color: var(--c-text);
    }

    a:hover {
      border-bottom: medium solid var(--c-primary);
    }
   }

    ${respondTo.md`
    display: flex;
    column-gap: 3.2rem; 
  `}
`;

export const HeroCtas = styled.div`
  display: flex;
  column-gap: 2.4rem; 
`;












