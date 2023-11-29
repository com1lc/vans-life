import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import styled, { css } from "styled-components";

const variations = {
    simple: css`
        background-color: #72e5fc;
        color: red;
    `,
    rugged: css`
        background-color: #115e59;
        color: white;
    `,
    luxury: css`
        background-color: #f2b957;
        color: blue;
    `,
};
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
const Container = styled.div`
    padding-inline: 27px;
    margin-bottom: 50px;
`;
const Detail = styled.div`
    display: flex;
    color: #161616;
`;
const Img = styled.img`
    width: 25%;
    border-radius: 5px;
    margin-block: 47px;
`;
const Tab = styled.div`
    margin-top: 60px;
    margin-left: 40px;
`;
const H2 = styled.h2`
    font-size: 2rem;
    margin-bottom: 10px;
`;
const I = styled.i`
    align-self: flex-start;

    height: 34px;
    padding: 6px 26px;
    font-style: normal;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    background-color: #ffead0;
    color: #4d4d4d;
    transition: 200ms all cubic-bezier(0.4, 0, 0.2, 1);

    ${(props) => variations[props.$variation]}
`;
const Price = styled.p`
    font-size: 1.25rem;
    margin-bottom: 10px;
`;
const LinkButton = styled.button`
    display: inline-block;
    text-align: center;
    text-decoration: none;
    border: none;
    padding: 0.75rem 1.375rem;
    color: initial;
    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
`;

const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
};

function HostVanDetail() {
    const [currentVan, setCurrentVan] = useState(null);
    const { id } = useParams();
    useEffect(
        function () {
            fetch(`/api/host/vans/${id}`)
                .then((res) => res.json())
                .then((data) => setCurrentVan(data.vans));
        },
        [id]
    );
    return (
        <Container>
            <Link to=".." relative="path">
                &larr; <span>Back to all vans</span>
            </Link>
            {currentVan ? (
                <>
                    <Detail>
                        <Img src={currentVan.imageUrl} />
                        <Tab>
                            <I $variation={currentVan.type}>
                                {currentVan.type}
                            </I>
                            <H2>{currentVan.name}</H2>
                            <Price>
                                <span
                                    style={{
                                        fontWeight: 700,
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    {currentVan.price}
                                </span>
                                /day
                            </Price>
                        </Tab>
                    </Detail>
                    <Nav>
                        <NavLink
                            to="."
                            end="true"
                            style={({ isActive }) =>
                                isActive ? activeStyles : null
                            }
                        >
                            Details
                        </NavLink>
                        <NavLink
                            to="pricing"
                            style={({ isActive }) =>
                                isActive ? activeStyles : null
                            }
                        >
                            Pricing
                        </NavLink>
                        <NavLink
                            to="photos"
                            style={({ isActive }) =>
                                isActive ? activeStyles : null
                            }
                        >
                            Photos
                        </NavLink>
                    </Nav>
                    <Outlet context={{ currentVan }} />
                </>
            ) : (
                <h2>Loading...</h2>
            )}
        </Container>
    );
}

export default HostVanDetail;
