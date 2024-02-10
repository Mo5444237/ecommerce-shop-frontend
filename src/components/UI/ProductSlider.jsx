import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from './ProductSlider.module.css';

const CustomPrevArrow = (props) => (
    <div
        // {...props}
        className={`${classes["custom-arrow"]} ${classes["custom-prev-arrow"]} ${props.className}`}
        onClick={props.onClick}
    ></div>
);

const CustomNextArrow = (props) => (
    <div
        // {...props}
        className={`${classes['custom-arrow']} ${classes['custom-next-arrow']} ${props.className}`}
        onClick={props.onClick}
    >
    </div>
);

const ProductSlider = (props) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        prevArrow: <CustomPrevArrow/>,
        nextArrow: <CustomNextArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <Slider className={classes.slider} {...settings}>{props.children}</Slider>
        </div>
    );
};


export default ProductSlider;