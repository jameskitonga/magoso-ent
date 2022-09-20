import styled from "styled-components"
import SendIcon from '@mui/icons-material/Send';


const NewsletterContainer = styled.div`

text-align:center;
`
const NewsletterHeading = styled.h2`
font-size:2rem;
font-weight:bold;
font-family:san-serif;
`
const NewsletterParagraph = styled.p`
font-size:1.5rem;
// width:80%;
font-family:san-serif;
`
const NewsletterEmail = styled.input`
padding:0 5em;
width:25%;
border-radius:6px;
border:3px solid purple;
color:black;
`
const NewsletterBUtton = styled.button`
 padding:.6em 2em;
background:purple;
color:cyan;
cursor:pointer;
border-radius:6px;
`
const NewsletterEmailButton = styled.div`
display:flex;
justify-content:center;
gap:1em; 
margin:1em;   
`


const Newsletter = () => {
    return (
        <NewsletterContainer>
            <NewsletterHeading>Subscribe to our Newsletter</NewsletterHeading>
            <NewsletterParagraph>Subscribe to our Newsletter for updates on latest promotions and offers</NewsletterParagraph>
            <NewsletterEmailButton>

                <NewsletterEmail type="email" placeholder="Email address" />
                <NewsletterBUtton>
                    {<SendIcon />}</NewsletterBUtton>
            </NewsletterEmailButton>




        </NewsletterContainer>

    )
}
export default Newsletter;