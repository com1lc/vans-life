import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const Content = styled.section`
    margin-top: 24px;
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 400;
`;
function HostVanInfo() {
    const { currentVan } = useOutletContext();
    return (
        <Content>
            <p>
                <b>Name</b>: {currentVan.name}
            </p>
            <p>
                <b>Category</b>: {currentVan.type}
            </p>
            <p>
                <b>Description</b>: {currentVan.description}
            </p>
        </Content>
    );
}

export default HostVanInfo;
