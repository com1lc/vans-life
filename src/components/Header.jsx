import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Head = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 10px;
    height: 110px;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 50px;
    & a {
        text-decoration: none;
        color: #4d4d4d;
        font-weight: 600;
        padding: 5px 20px;
    }
    & a:hover {
        color: #161616;
        text-decoration: underline;
    }
`;

const Nav = styled.nav`
    display: flex;
    gap: 50px;
`;
const navLinkStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
};

function Header() {
    return (
        <Head>
            <Link to="/">#VANLIFE</Link>

            <Nav>
                <NavLink
                    to="/"
                    style={({ isActive }) => (isActive ? navLinkStyle : null)}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => (isActive ? navLinkStyle : null)}
                >
                    About
                </NavLink>
                <NavLink
                    to="/vans"
                    style={({ isActive }) => (isActive ? navLinkStyle : null)}
                >
                    Vans
                </NavLink>
                <NavLink
                    to="/host"
                    style={({ isActive }) => (isActive ? navLinkStyle : null)}
                >
                    Host
                </NavLink>
                {/* <Link to="/vans/:id">Detail</Link> */}
            </Nav>
        </Head>
    );
}

export default Header;
