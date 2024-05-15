import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import SlideCard from "./SliderCard/SlideCard";
import { SliderData } from "../utils/products";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../app/features/dataSlice";

const SliderHome = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
          {data.slice(0, 3).map((parts) => {
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
