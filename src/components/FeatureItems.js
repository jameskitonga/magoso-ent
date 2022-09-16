import styled from "styled-components";


const FeatureItemsContainer = styled.div`
box-shadow:1px 1px 4px light-grey;
border:1px solid lightGrey;
border-radius:5px;
align-items:center;
width:fit-content;
display:flex;
padding:1em;
gap:1em;
`



const FeatureItemsText = styled.h3``


const FeatureItems = ({ text, icon, borderColor }) => {
    return (
        <FeatureItemsContainer style={{ borderTop: `2px solid ${borderColor}` }}>

            {icon}
            < FeatureItemsText > {text}</FeatureItemsText >




        </FeatureItemsContainer >

    )
}

export default FeatureItems;