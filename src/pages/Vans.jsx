import styled, { css } from "styled-components";

import { useState } from "react";
import { useEffect } from "react";

import { Link, useSearchParams } from "react-router-dom";

const variations = {
    simple: css`
        background-color: #72e5fc;
        color: red;

        &:hover,
        selected {
            background-color: #e17654;
        }
    `,
    rugged: css`
        background-color: #115e59;
        color: white;
        &:hover,
        selected {
            background-color: #115e59;
        }
    `,
    luxury: css`
        background-color: #f2b957;
        color: blue;
        &:hover,
        selected {
            background-color: #161616;
        }
    `,
    clear: css`
        margin-left: -20px;
        height: 34px;
        padding: 6px 26px;
        font-style: normal;
        font-weight: 500;
        border: none;
        border-radius: 5px;
        text-decoration: underline;
        background-color: transparent;
        color: #4d4d4d;
    `,
};

const Box = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    justify-items: center;
    margin-left: 50px;
    margin-bottom: 30px;
`;
const VanTile = styled.div`
    /* padding-inline: 23px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    box-shadow: 5px 5px 10px hsla(76.59, 24.35%, 37.84%, 0.274);
    /* gap: 3px; */
    margin-top: 20px;
    background-color: #ffffffd6;
`;
const Img = styled.img`
    max-width: 100%;
    padding: 30px;
    display: flex;
    text-align: center;
    border-radius: 5px;
`;
const Tab = styled.div`
    margin-left: 32px;
    margin-bottom: 40px;
`;
const H3 = styled.h3``;
const I = styled.i`
    align-self: flex-start;

    height: 34px;
    padding: 6px 26px;
    font-style: normal;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    /* background-color: ; */
    color: #4d4d4d;
    transition: 200ms all cubic-bezier(0.4, 0, 0.2, 1);
    ${(props) => variations[props.$variation]}
`;
const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    /* align-items: center; */
    padding-left: 50px;
    margin-bottom: 10px;
    /* background-color: white;  */
`;
const FilterButton = styled.button`
    height: 34px;
    padding: 6px 26px;
    font-style: normal;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    background-color: #ffead0;
    color: #4d4d4d;
    transition: 200ms all cubic-bezier(0.4, 0, 0.2, 1);
    & :hover {
        color: #ffead0;
    }
    & :focus {
        outline: none;
    }
    & selected {
        color: #ffead0;
    }
    ${(props) => variations[props.$variation]}
`;

function vans() {
    const [vans, setVans] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const typeFilter = searchParams.get("type");
    console.log(typeFilter);

    useEffect(function () {
        fetch("/api/vans")
            .then((res) => res.json())
            .then((data) => setVans(data.vans));
    }, []);

    const displayedVans = typeFilter
        ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
        : vans;

    return (
        <>
            <h1>Explore our van options</h1>

            <Nav>
                <FilterButton
                    onClick={() => setSearchParams({ type: "simple" })}
                    $variation="simple"
                >
                    Simple
                </FilterButton>
                <FilterButton
                    onClick={() => setSearchParams({ type: "rugged" })}
                    $variation="rugged"
                >
                    Rugged
                </FilterButton>
                <FilterButton
                    onClick={() => setSearchParams({ type: "luxury" })}
                    $variation="luxury"
                >
                    Luxury
                </FilterButton>
                <FilterButton
                    onClick={() => setSearchParams({ type: "" })}
                    $variation="clear"
                >
                    Clear
                </FilterButton>
                {/*  
                 //use Link to set params
                <FilterButton $variation="simple">
                    <Link to="?type=simple">Simple</Link>
                </FilterButton>
                <FilterButton $variation="rugged">
                    <Link to="?type=rugged">Rugged</Link>
                </FilterButton>
                <FilterButton $variation="luxury">
                    <Link to="?type=luxury">Luxury</Link>
                </FilterButton>
                <FilterButton $variation="clear">
                    <Link to=".">Clear</Link>
                </FilterButton>
                */}
            </Nav>

            <Box>
                {displayedVans.map((van) => (
                    <VanTile key={van.id}>
                        <Link to={`/vans/${van.id}`}>
                            <Img src={van.imageUrl} />
                            <Tab>
                                <H3>{van.name}</H3>
                                <p>
                                    ${van.price}
                                    <span>/day</span>
                                </p>

                                <I $variation={van.type}>{van.type}</I>
                            </Tab>
                        </Link>
                    </VanTile>
                ))}
            </Box>
        </>
    );
}

export default vans;
