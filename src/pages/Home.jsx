import styled from "styled-components";
import img from "../assets/images/home-hero.png";

const HomeContainer = styled.main`
    background-image: url(${img});
    background-size: cover;
    min-height: 350px;
    color: white;
    padding: 45px 23px;
`;
const H1 = styled.h1`
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 42px;
`;
const P = styled.p`
    line-height: 24px;
`;
function Home() {
    return (
        <HomeContainer>
            <H1>You got the travel plans, we got the travel vans.</H1>
            <P>
                Add adventure to your life by joining the #vanlife movement.
                Rent the perfect van to make your perfect road trip.
            </P>
            {/* <Link to="vans">Find your van</Link> */}
        </HomeContainer>
    );
}

export default Home;
