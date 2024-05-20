import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import SlideCard from "./SliderCard/SlideCard";
import { SliderData } from "../utils/products";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SliderHome = () => {
  const {
    loading: partsLoading,
    data: partsData,
    error: partsError,
  } = useSelector((state) => state.partsData);

  const settings = {
    nav: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section className="homeSlide">
      <Container>
        <Slider {...settings}>
          {partsData.slice(0, 3).map((parts) => {
            return (
              <SlideCard
                key={parts.partsId}
                title={parts.partName}
                cover={parts.partThumbnail}
                desc={parts.partDescription}
              />
            );
          })}
        </Slider>
      </Container>
    </section>
  );
};

export default SliderHome;
