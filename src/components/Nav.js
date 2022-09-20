import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const NavContainer = styled.nav`
width:100%;
background:purple;
color:cyan;
`
const Container = styled.div`
width:80%;
margin:0 auto;
`
const InnerNav = styled.div`
display:flex;
justify-content:space-between;
`
const LeftNav = styled.div`
align-items:center;
display:flex;
gap:2em

`

const RightNav = styled.div`

`

const Logo = styled.h1`

`
const SearchContainer = styled.div`
border:2px solid lightGrey;
border-radius:5px;
height:fit-content;
display:flex;
align-items:center;
background:white;
color:black;


`
const SearchInput = styled.input`
outline:none;
padding:0em 1em;
border:none;
`
const NavUl = styled.ul`
display:flex;
gap:2em;
list-style:none;
cursor:pointer;
font-family:san-serif;
font-size:1.2rem;
color:cyan;

`
const NavLi = styled.li`
`


const Nav = () => {
    return (
        <div>
            <NavContainer>
                <Container>
                    <InnerNav>
                        <LeftNav>
                            <Logo>Magoso Ent.</Logo>
                            <SearchContainer>
                                <SearchIcon />
                                <SearchInput type="text" placeholder="Search" />
                            </SearchContainer>
                        </LeftNav>
                        <RightNav>
                            <NavUl>
                                <NavLi>Shop</NavLi>
                                <NavLi>About us</NavLi>
                                <NavLi>Contact</NavLi>
                                <NavLi>LogIn/Register</NavLi>
                                <NavLi><Badge badgeContent={0} color="primary">
                                    <AddShoppingCartIcon color="cyan" />
                                </Badge></NavLi>
                            </NavUl>
                        </RightNav>
                    </InnerNav>
                </Container>
            </NavContainer>
        </div>
    )


}
export default Nav;