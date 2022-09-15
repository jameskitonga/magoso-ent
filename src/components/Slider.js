import { SlideshowRounded } from "@mui/icons-material";
import { slides } from "../data"





const Slider = () => {
    return (
        <div>

            {
                slides.map((slide, index) => {
                    return (
                        <div>
                            <div>
                                <img src={slide.img} />
                            </div>

                            <div>
                                <h2>{slide.name}</h2>
                                <p>{slide.description}</p>
                                <button>Shop beadery</button>
                            </div>



                        </div>
                    )
                })
            }



        </div>
    )
}
export default Slider;