import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { useSelector } from "react-redux";

const Home = () => {
  useWindowScrollToTop();

  const {
    loading: partsLoading,
    data: partsData,
    error: partsError,
  } = useSelector((state) => state.partsData);
  const {
    loading: carsLoading,
    data: carData,
    error: carsError,
  } = useSelector((state) => state.carData);

  if (partsLoading || carsLoading) return "Loading ...";
  if (partsError || carsError) return <p>Error: {partsError || carsError}</p>;

  const formattedPartsData = partsData.map((part) => ({
    id: part.partsId,
    name: part.partName,
    thumbnail: part.partThumbnail,
    price: part.partPrice,
    description: part.partDescription,
  }));

  const formattedCarData = carData.map((car) => ({
    id: car.id,
    name: car.title,
    thumbnail: car.thumbnailCarPicture,
    description: car.title,
  }));

  const carBoxStyle = {
    price: {
      display: "none", // This hides the price
    },
    button: {
      display: "none", // This hides the button
    },
  };

  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Section
        title="Fresh parts from Japan"
        productItems={formattedPartsData}
      />
      <Section
        title="Import cars"
        bgColor="white"
        productItems={formattedCarData}
        style={carBoxStyle}
      />
    </Fragment>
  );
};

export default Home;
