import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const Img = styled.img`
    width: 10%;
    border-radius: 5px;
`;

function HostVanPhoto() {
    const { currentVan } = useOutletContext();
    return (
        <section>
            <Img src={currentVan.imageUrl} />
        </section>
    );
}

export default HostVanPhoto;
