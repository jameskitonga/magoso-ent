import styled from "@emotion/styled";

const AboutContainer = styled.div`
background:purple;
color:burlywood;
`

const AboutInnerContainer = styled.div`
width:80%;
padding:1em;
margin:0 auto;
font-family:san-serif;
font-weight:bold;
`
const About = () => {
    return (
        <AboutContainer>
            <AboutInnerContainer>

                <h2>About Magoso Ent.</h2>
                <p>Magoso Ent was founded in 2022 ,where the main aim was to sell product and goods to people at affordable prices.</p>

            </AboutInnerContainer>



        </AboutContainer>

    )
}
export default About;