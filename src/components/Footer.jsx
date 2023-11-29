import styled from "styled-components";

const Foot = styled.footer`
    background-color: #161616;
    color: #aaaaaa;
    height: 74px;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    font-weight: 500;
`;

function Footer() {
    return <Foot>&#169; 2023 #VANLIFE</Foot>;
}

export default Footer;
