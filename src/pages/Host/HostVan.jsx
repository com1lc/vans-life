import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-items: center;
`;
const VanTile = styled.div`
    display: flex;
    background-color: #daf68d;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
`;
const Img = styled.img`
    max-width: 150px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px hsla(76.59, 24.35%, 37.84%, 0.274);
`;
const Content = styled.div`
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const H3 = styled.h3`
    margin: 0;
`;

function HostVan() {
    const [vans, setVans] = useState([]);

    useEffect(function () {
        fetch("/api/host/vans")
            .then((res) => res.json())
            .then((data) => setVans(data.vans));
    }, []);

    return (
        <>
            <h1>Explore our van options</h1>
            <Box>
                {vans.length > 0 ? (
                    vans.map((van) => (
                        <Link to={van.id} key={van.id}>
                            <VanTile key={van.id}>
                                <Img
                                    src={van.imageUrl}
                                    alt={`Photo of ${van.name}`}
                                />
                                <Content>
                                    <H3>{van.name}</H3>
                                    <p>
                                        ${van.price}
                                        <span>/day</span>
                                    </p>
                                </Content>
                            </VanTile>
                        </Link>
                    ))
                ) : (
                    <h2>Loading...</h2>
                )}
            </Box>
        </>
    );
}

export default HostVan;
