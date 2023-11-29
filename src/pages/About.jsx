import styled from "styled-components";
import bgImg from "../assets/images/about-hero.png";

const Img = styled.img`
    width: 100%;
`;
const Box = styled.div`
    background-color: #ffcc8d;
    color: #161616;
    padding-inline: 32px;
    padding-bottom: 32px;
    margin-inline: 27px;
    border-radius: 5px;
`;
const Content = styled.div`
    line-height: 38px;
`;
const P = styled.p`
    line-height: 22px;
`;
const H1 = styled.h1`
    line-height: 38px;
`;
const H2 = styled.h2`
    margin: 0;
    padding-block: 37px;
`;
function About() {
    return (
        <>
            <Img src={bgImg} />
            <Content>
                <H1>Don’t squeeze in a sedan when you could relax in a van.</H1>
                <P>
                    Our mission is to enliven your road trip with the perfect
                    travel van rental. Our vans are recertified before each trip
                    to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </P>
                <P>
                    Our team is full of vanlife enthusiasts who know firsthand
                    the magic of touring the world on 4 wheels.
                </P>
            </Content>
            <Box>
                <H2>
                    Your destination is waiting.
                    <br />
                    Your van is ready.
                </H2>
                {/* <Link className="link-button" to="/vans">
                    Explore our vans
                </Link> */}
            </Box>
        </>
    );
}

export default About;
