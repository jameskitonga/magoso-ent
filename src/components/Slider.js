import styled from "styled-components"
import { slides } from "../data"

const SliderContainer = styled.div`

`
const SliderItem = styled.div`
width:100vw;
height:100vh;
position:relative;

`

const ImageContainer = styled.div`
width:100%;
height:100%;{
                slides.map((slide, index) => {
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
`

const SliderHeading = styled.h2`

`

const SliderDescription = styled.p`

`
const Button = styled.button`

`


const Slider = () => {
    return (
        <SliderContainer>

            {
                slides.map((slide, index) => {
                    return (
                        <SliderItem>
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