import styled from "styled-components";
import { categories } from "../data";

const ImageContainer = styled.div``

const Image = styled.div``

const CategoryText = styled.h3``

const CategoryItem = () => {
    return (

        <div>
            {
                categories.map((category, index) => {
                    return (
                        


                    )

                })
            }
        </div>


    )
}
export default CategoryItem;