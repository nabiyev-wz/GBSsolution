import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PerfumeCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div className="carousel-item">
                    <img
                        src="https://green-leaf.uz/wp-content/uploads/slide.jpg"
                        alt="Green Life 1"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://green-leaf.uz/wp-content/uploads/slide3.jpg"
                        alt="Green Life 2"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://green-leaf.uz/wp-content/uploads/slide4.jpg"
                        alt="Green Life 3"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://green-leaf.uz/wp-content/uploads/slide2.jpg"
                        alt="Green Life 4"
                    />
                </div>
            </Slider>

            <div className="video-container">
                <h2>Watch Our Video</h2>
                <div className="embed-responsive">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TFFrw6XLmPw?si=OdbOTFs0pWsSeDDN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                
                
            </div>

            <style jsx>{`
                .carousel-container {
                    margin: 20px;
                    margin-top: 150px;
                }

                .carousel-item {
                    position: relative;
                    text-align: center;
                }

                .carousel-item img {
                    width: 1240px;
                    height: 350px;
                    object-fit: cover;
                    border-radius: 10px;
                }

                .slick-prev,
                .slick-next {
                    z-index: 2;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 0;
                }

                .slick-prev {
                    left: 10px;
                }

                .slick-next {
                    right: 10px;
                }

                .slick-prev:before,
                .slick-next:before {
                    font-size: 24px;
                    color: #2e8b57;
                }

                .slick-prev:before {
                    content: "←";
                }

                .slick-next:before {
                    content: "→";
                }

                .video-container {
                    margin-top: 40px;
                    text-align: center;
                }

                .embed-responsive {
                    position: relative;
                    padding-bottom: 56.25%;
                    height: 0;
                    overflow: hidden;
                    max-width: 100%;
                    background: #000;
                }

                .embed-responsive iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
    );
};

export default PerfumeCarousel;
