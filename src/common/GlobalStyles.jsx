import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    // Color
    /* light mode  */
    --c-title: hsla(0, 0%, 0%, 1); 
    --c-text: hsla(0, 0%, 35%, 1); 
    --c-choose-onboarding: #509AD6; 
    --c-white: hsla(0, 0%, 100%, 1);
    --c-primary: hsla(48, 93%, 53%, 1);
    --c-secondary: hsla(52, 83%, 14%, 1); 
    --c-error-input: hsla(0, 0%, 100%, 1); 
    --c-bg-primary: hsla(220, 18%, 97%, 1); 
    --c-bg-secondary: hsla(235, 9%, 29%, 1); 
    --c-btn-hprimary: hsla(48, 100%, 75%, 1); 
    --c-btn-hsecondary: hsla(52, 23%, 50%, 1); 

    // Font family
    --ff-text: 'Source Sans Pro', sans-serif;
    --ff-heading: 'Space Grotesk', sans-serif;
    --ff-footer: 'Inter', sans-serif;

    // Font size 
    --fs-body: 1.8rem; 
    --fs-title: 5.6rem; 
    --fs-subtitle: 3.6rem;
    --fs-title-footer: 2rem; 

    //line-height
    --lh-title: 7.1rem;
    --lh-text: 2.7rem;
    --lh-body: 2.3rem;

     // wrapper
     --wrapper: max(2rem, 15.3vw - 18rem / 2);
}

//reset
html {
  /* box-sizing: border-box; */
  font-family: var(--ff-text);
  font-size: 62.5%
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-size: var(--fs-body);
  line-height: var(--lh-body);
}

/* body,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
p,
pre,
blockquote,
figure,
hr {
  margin: 0;
  padding: 0;
} */

img {
  max-width: 100%;
  height: auto;
}

p {
  color: var(--c-text);
  line-height: var(--lh-text); 
}

h1,
h2,
h3 {
    line-height: var(--lh-title);
}

*:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {
    all: unset;
    display: revert;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

a, button {
    cursor: revert;
}

ol, ul, menu {
    list-style: none;
}

img {
    max-width: 100%;
}

table {
    border-collapse: collapse;
}

textarea {
    white-space: revert;
}

meter {
    -webkit-appearance: revert;
    appearance: revert;
}

::placeholder {
    color: unset;
}

:where([hidden]) {
    display: none;
}

:where([contenteditable]) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
}

:where([draggable="true"]) {
    -webkit-user-drag: element;
}
`;

export default GlobalStyles;
