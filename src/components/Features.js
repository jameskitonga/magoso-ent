
import styled from "styled-components";
import FeatureItems from "./FeatureItems";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PercentIcon from '@mui/icons-material/Percent';
import DiamondIcon from '@mui/icons-material/Diamond';

const FeatureContainer = styled.div`
padding:3em;
`
const Container = styled.div`
display:flex;
justify-content:space-between;
width:80%;
margin:0 auto;
`




const Features = () => {
    return (

        <FeatureContainer>
            <Container>


                <FeatureItems icon={<AccessTimeIcon />} text="24/7" borderColor="Green" />
                <FeatureItems icon={<PercentIcon />} text="Great Offers" borderColor="Orange" />
                <FeatureItems icon={<DiamondIcon />} text="Quality" borderColor="Purple" />




            </Container>
        </FeatureContainer>


    )
}
export default Features;