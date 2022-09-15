import styled from "styled-components"
import { slides } from "../data"

const SliderContainer = styled.div`

`
const SliderItem = styled.div`

`

const ImageContainer = styled.div`

`


const Image = styled.div`

`


const SliderInfo = styled.div`

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
                                <Image >

                                    <img src={slide.img} />
                                </Image>
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