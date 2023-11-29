import styled from "styled-components";

import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";

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
function vans() {
    const [vans, setVans] = useState([]);
    useEffect(function () {
        fetch("/api/vans")
            .then((res) => res.json())
            .then((data) => setVans(data.vans));
        // async function fetchApi() {
        //     const res = await fetch("/api/vans");
        //     // .then((res) => res.json())
        //     // .then((data) => console.log(data));
        //     const data = await res.json();
        //     console.log(data);
        // }
        // fetchApi();
    }, []);

    return (
        <>
            <h1>Explore our van options</h1>
            <Box>
                {vans.map((van) => (
                    <VanTile key={van.id}>
                        <Link to={`/vans/${van.id}`}>
                            <Img src={van.imageUrl} />
                            <Tab>
                                <H3>{van.name}</H3>
                                <p>
                                    ${van.price}
                                    <span>/day</span>
                                </p>

                                <i className={`van-type ${van.type} selected`}>
                                    {van.type}
                                </i>
                            </Tab>
                        </Link>
                    </VanTile>
                ))}
            </Box>
        </>
    );
}

export default vans;
