import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    margin-bottom: 30px;

    & a {
        text-decoration: none;
        color: #4d4d4d;
        font-weight: 500;
        padding: 5px 20px;
    }
    & a:hover {
        color: #161616;
        text-decoration: underline;
        font-weight: 600;
    }
`;

const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
};

function HostLayout() {
    return (
        <>
            <Nav>
                <NavLink
                    to="."
                    end={true} //fix bug
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="income"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    Income
                </NavLink>
                <NavLink
                    to="vans"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    Vans
                </NavLink>
                <NavLink
                    to="reviews"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    Reviews
                </NavLink>
            </Nav>
            <Outlet />
        </>
    );
}

export default HostLayout;
