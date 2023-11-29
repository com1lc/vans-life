import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const Price = styled.section`
    font-size: 1.25rem;
    margin-bottom: 10px;
`;
function HostVanPricing() {
    const { currentVan } = useOutletContext();
    return (
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
    );
}

export default HostVanPricing;
