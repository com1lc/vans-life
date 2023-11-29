import styled from "styled-components";

import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";

const Box = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    justify-items: center;
`;
const VanTile = styled.div`
    /* padding-inline: 23px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    /* gap: 3px; */
    margin-top: 40px;
`;
const Img = styled.img`
    max-width: 85%;
    border-radius: 5px;
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
                            <H3>{van.name}</H3>
                            <p>
                                ${van.price}
                                <span>/day</span>
                            </p>

                            <i className={`van-type ${van.type} selected`}>
                                {van.type}
                            </i>
                        </Link>
                    </VanTile>
                ))}
            </Box>
        </>
    );
}

export default vans;
