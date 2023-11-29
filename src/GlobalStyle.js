import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

html,
body {
    margin: 0;
    padding: 0;
    background-color: #fff7ed;
    font-family: "Inter", sans-serif;
}

a {
    text-decoration: unset;
    color: unset;
}

body::-webkit-scrollbar {
    display: none;
}

body {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.site-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
`;
export default GlobalStyle;
