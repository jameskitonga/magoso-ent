import styled from "styled-components";
import { login } from "../data";

const LogInContainer = styled.div`
background:lightGrey;
`
const ContainerLogin = styled.div`
display:flex;
justify-content:space-around;
width:80%;
background:white;
margin:0 auto;
`
const LogInLeft = styled.div`
padding:1em 2em;
border:2px solid lightGrey;
`
const LogInRight = styled.div`
// background:rgba(0,0,0,.5);
width:60%;
display:flex;
align-items:center;
justify-content:center;
box-shadow:2px 2px 4px solid darkGrey;
`
const Logo = styled.h1`
text-align:center;
color:purple;
`
const Heading = styled.h3`
text-align:center;
text-transform:uppercase;
color:purple;

`
const LoginEmailPasswardButton = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const LogInEmail = styled.input`
margin:2em;
border:none;
border-bottom:7px solid purple;
color:purple;
width:fit-content;
padding:1em 4em;

`
const LogInPassword = styled.input`
padding:1em 4em;
border-top:none;
border-left:none;
border-right:none;
margin:1em;
width:60%;
border-bottom:2px solid purple;

`
const LogInButton = styled.button`
padding:.8em 4em;
width:100%;
background:purple;
color:cyan;
border-radius:6px;
border:none;
margin:1em;
  cursor:pointer;
  font-size:1rem;

`
const LogInCheckbox = styled.input``
const CheckboxParagraph = styled.div`
display:flex;
gap:1em;
`
const CheckboxText = styled.p`
font-family:san-serif;
`
const LogInText = styled.div`
display:flex; 
justify-content:space-between;
`
const ForgetPassword = styled.div``
const LogInPassorwd = styled.p`
color:purple;
`
const ButtonText = styled.div`
display:flex;
justify-content:center;
gap:1em;
`
const LogInBottomText = styled.div`
// display:flex;
align-items:center;
justify-content:center;
`
const LogInBottomButton = styled.h3`
width:120%;
`
const BottomText = styled.p``
const BottomButton = styled.button`
padding:1em 4em;
color:purple;
border:2px solid purple;
border-radius:4px;
background:white;
font-size:.8rem;
margin-top:-2em;
cursor:pointer;
`
const RightHeadingTexts = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color:white;
`
const RightFirstHeading = styled.div`
text-align:center;
color:white;
font-size:.6em;
text-transform:uppercase;

`
const WelcomeHeading = styled.h1`
`

const RightSecondHeading = styled.div``
const LogoHeading = styled.h1`
text-transform:capitalize;
font-family:san-serif;
font-size:3rem;

`
const RightThirdHeading = styled.div``
const paragraphHeading = styled.p`
font-weight:bold;
font-size:1rem;

`
const Copyright = styled.p`
text-align:center;
font-size:.2rem;      
color:purple;
`

const LoginItems = () => {


    return (
        <LogInContainer>
            <ContainerLogin>
                <LogInLeft>
                    <Logo>Magoso Ent.</Logo>
                    <Heading>LogIn</Heading>
                    <LoginEmailPasswardButton>
                        <LogInEmail type="email" placeholder="E-mail" />
                        <LogInPassword type="text" placeholder="password" />
                        <LogInButton>login</LogInButton>
                    </LoginEmailPasswardButton>
                    <LogInText>
                        <CheckboxParagraph>
                            <LogInCheckbox type="checkbox" />
                            <CheckboxText>Remember Me</CheckboxText>
                        </CheckboxParagraph>
                        <ForgetPassword>
                            <LogInPassorwd>Forgot your password ?</LogInPassorwd>
                        </ForgetPassword>
                    </LogInText>
                    <ButtonText>
                        <LogInBottomButton>
                            <LogInBottomText>New to Magoso Ent </LogInBottomText>
                        </LogInBottomButton>

                        <LogInBottomButton>
                            <BottomButton>Create Account</BottomButton>
                        </LogInBottomButton>
                    </ButtonText>
                    <BottomText>
                        <Copyright>Magoso Ent. &copy; 2022</Copyright>
                    </BottomText>




                </LogInLeft>
                <LogInRight>
                    <RightHeadingTexts>
                        <RightFirstHeading><WelcomeHeading>welcome to</WelcomeHeading></RightFirstHeading>
                        <RightSecondHeading>
                            <LogoHeading>magoso ent.</LogoHeading>
                        </RightSecondHeading>
                        <RightThirdHeading>
                            <paragraphHeading>
                                The home of Reliable Shopping.
                            </paragraphHeading>
                        </RightThirdHeading>
                    </RightHeadingTexts>






                </LogInRight>






            </ContainerLogin>





        </LogInContainer>

    )
   
}
export default LoginItems;
