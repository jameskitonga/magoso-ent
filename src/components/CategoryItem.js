import styled from "styled-components";
import { categories } from "../data";


const CategoryItemContainer = styled.div`
display:flex;
flex-wrap:wrap;

gap:1em;
`


const ImageContainer = styled.div`
margin:0 auto;
display:flex;
justify-content:center;
align-items:center;
width:30%;
position:relative;
color:white;
font-weight:bold;
font-size:2rem;
font-family:san-serif;
cursor:pointer;
`

const Image = styled.img`
width:100%;
height:100%;

`
const ImageContain = styled.div`
width:100%;
height:100%;
`

const CategoryInfo = styled.div`
position:absolute;
display:flex;
justify-content:center;
align-items:center;
background:rgba(0,0,0,.5);
width:100%;
height:100%;
color:white;
font-weight:bold;
font-size:2rem;
font-family:san-serif;
`

const CategoryText = styled.h3`



`
const CategoryHeading = styled.h2`
`

const CategoryItem = () => {
    return (

        <CategoryItemContainer>
            <CategoryHeading>Broswe categories</CategoryHeading>

            {
                categories.map((category, index) => {
                    return (


                        <ImageContainer>
                            <ImageContain>

                                <Image src={category.img} />
                            </ImageContain>


                            <CategoryInfo>


                                <CategoryText>{category.name}</CategoryText>


                            </CategoryInfo>



                        </ImageContainer>


                    )

                })
            }
        </CategoryItemContainer>


    )
}
export default CategoryItem;