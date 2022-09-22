import LoginItems from "../components/LoginItems"
import styled from "styled-components"
import Nav from "../components/Nav"
import Footer from "../components/FooterItems"


const LoginContainers = styled.div``

const Login = () => {
    return (

        <LoginContainers>
            <Nav />
            
            <LoginItems />
            
            <Footer/>

        </LoginContainers>


    )
}
export default Login;