import styled from "styled-components"
import { slides } from "../data"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react"

const SliderContainer = styled.div`
display:flex;
overflow:hidden;

`
const SliderItem = styled.div`
width:100vw;
height:100vh;
position:relative;
transition:all 1s ease-in;

`
const ArrowNext = styled.div`
cursor:pointer;
width:40px;
height:40px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:50%;
left:${props => props.direction === "left" ? 0 : 97}%;
transform:translateY(-50%);
background:lightGrey;
color:cyan;
z-index:300;
`



const ImageContainer = styled.div`
width:100vw;
height:100%;

`


const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;

`


const SliderInfo = styled.div`
position:absolute;
top:0;
left:0;
z-index:100;
width:100%;
height:100%;
padding:1em;
color:white;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background:rgba(0,0,0,.5);
font-size:1.5rem;

`

const SliderHeading = styled.h2`

`

const SliderDescription = styled.p`

`
const Button = styled.button`
background:purple;
color:cyan;
padding:.8em 3em;
border-radius:6px;
border:2px solid cyan;
font-size:1rem;
cursor:pointer;
 transition: all 1.5s ease-in;
&:hover{
    transform:scale(1.1);
    color:purple;
    background:cyan;
    font-size:1rem;
    font-weight:bold;
    font-family:san-serif;
    border:3px solid purple;
    border-radius:6px;
    
}
`


const Slider = () => {
    const [activeIndex, SetActiveIndex] = useState(0)

    const handleSlide = (side) => {
        // `hey i am here ${side} `
        if (side === "left") {
            SetActiveIndex(activeIndex > 0 ? activeIndex - 1 : 4)
        }
        else {
            SetActiveIndex(activeIndex < 4 ? activeIndex + 1 : 0)
        }

    }
    return (
        <SliderContainer>

            {
                slides.map((slide, index) => {
                    return (
                        <SliderItem style={{ transform: `translateX(${activeIndex * -100}vw)` }}>
                            <ArrowNext direction="left" onClick={() => handleSlide("left")}>

                                <KeyboardArrowLeftIcon />
                            </ArrowNext>
                            <ArrowNext direction="right" onClick={() => handleSlide("right")}>

                                <KeyboardArrowRightIcon />
                            </ArrowNext>
                            <ImageContainer>


                                <Image src={slide.img} alt="tis" />

                            </ImageContainer>

                            <SliderInfo>
                                < SliderHeading>{slide.name}</ SliderHeading>
                                <SliderDescription>{slide.description}</SliderDescription>
                                <Button>Shop {slide.name}</Button>
                            </SliderInfo>




                        </ SliderItem>
                    )
                })
            }



        </SliderContainer>
    )
}




export default Slider;