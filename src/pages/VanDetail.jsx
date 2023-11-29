import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
const Container = styled.div`
    padding-inline: 27px;
`;
const Detail = styled.div`
    display: flex;
    flex-direction: column;
    color: #161616;
`;
const Img = styled.img`
    border-radius: 5px;
    margin-block: 47px;
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
function VanDetail() {
    const params = useParams();
    const [van, setVan] = useState(null);

    useEffect(
        function () {
            fetch(`/api/vans/${params.id}`)
                .then((res) => res.json())
                .then((data) => setVan(data.vans));
        },
        [params.id]
    );
    return (
        <Container>
            {van ? (
                <Detail>
                    <Img src={van.imageUrl} />
                    <I $variation={van.type}>{van.type}</I>
                    <H2>{van.name}</H2>
                    <Price>
                        <span style={{ fontWeight: 700, fontSize: "1.5rem" }}>
                            {van.price}
                        </span>
                        /day
                    </Price>
                    <p>{van.description}</p>
                    <LinkButton>Rent this van</LinkButton>
                </Detail>
            ) : (
                <h2>Loading...</h2>
            )}
        </Container>
    );
}

export default VanDetail;
