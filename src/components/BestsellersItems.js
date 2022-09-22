import { bestsellers } from "../data";
import styled from "styled-components";

const BestsellerContainer = styled.div`
margin:0 auto;

`
const Container = styled.div`
display:flex;
gap:1em;
flex-wrap:wrap;
width:70%;
margin:0 auto;


`

const InnerBestsellerContainer = styled.div`
width:25%;
border:3px solid lightGrey;
box-shadow:2px 2px 4px lightGrey;
padding:1em;
cursor:pointer;
 transition: all 1s ease-in;
&:hover{
    transform:scale(1.1);
}
`
const BestsellersImageContainer = styled.div`
width:100%;
height:300px;

`
const Image = styled.img`
width:100%;
height:100%;
`
const BestsellerInfo = styled.div`
`
const BestsellersHeading = styled.h2`
text-decoration:underline;
text-transform:capitalise;
font-family:san-serif;
text-align:center;
`
const BestsellersAmount = styled.h3`
text-transform:capitalise;
font-family:san-serif;
font-size:1.6rem;
`
const BestsellersAmounts = styled.h3`
font-family:san-serif;

`
const BestsellersButton = styled.button`
 padding:.6em 2em;
background:purple;
color:cyan;
cursor:pointer;

border-radius:6px;
border:1px solid burlywood;
font-weight:bold;
`
const BestsellersAddCart = styled.button`
background:cyan;
color:purple;
padding:.6em 2em;
font-weight:bold;
cursor:pointer;
border-radius:6px ;
`
const BestsellerButtonContainer = styled.div`
display:flex;
gap:.5em;
`


const BestsellersItems = () => {
    return (
        <BestsellerContainer>                                   

            <BestsellersHeading>Best Seller</BestsellersHeading>
            <Container>
                {
                    bestsellers.slice(0, 3).map((bestseller, index) => {
                        return (
                            <InnerBestsellerContainer key={index}>

                                <BestsellersImageContainer>
                                    <Image src={bestseller.img} />


                                </BestsellersImageContainer>
                                <BestsellerInfo>

                                    <BestsellersAmount>{bestseller.name} </BestsellersAmount>
                                    <BestsellersAmounts>Ksh.{bestseller.amount}/=</BestsellersAmounts>
                                    <BestsellerButtonContainer>

                                        <BestsellersAddCart>Add To Cart</BestsellersAddCart>
                                        <BestsellersButton>Buy Now</BestsellersButton>
                                    </BestsellerButtonContainer>
                                </BestsellerInfo>





                            </InnerBestsellerContainer>




                        )
                    })

                }

            </Container>
        </BestsellerContainer>
    )

}
export default BestsellersItems;