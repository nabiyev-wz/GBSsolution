import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const PerfumeCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <img src="https://static.wixstatic.com/media/11062b_f8226687e5fd4210be6c0c90739bd44f~mv2.jpg/v1/crop/x_0,y_497,w_5000,h_2587/fill/w_560,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f8226687e5fd4210be6c0c90739bd44f~mv2.jpg" alt="Perfume 1" />
                    <h3>Perfume Name 1</h3>
                </div>
                <div>
                    <img src="https://imfirenzedigest.com/wp-content/uploads/2024/08/gemstones-in-perfumery-olivier-durbano.jpg.webp" alt="Perfume 2" />
                    <h3>Perfume Name 2</h3>
                </div>
                <div>
                    <img src="https://hoshigato.com/cdn/shop/files/AdobeStock_176349904.jpg?v=1720386463&width=1946" alt="Perfume 3" />
                    <h3>Perfume Name 3</h3>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh2gEcX56mVKiXQmvEL7_MuWr86jvgA7b69w&s" alt="Perfume 4" />
                    <h3>Perfume Name 4</h3>
                </div>
            </Slider>
        </div>
    );
};

export default PerfumeCarousel;
