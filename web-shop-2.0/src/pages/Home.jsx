import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../app/features/dataSlice";
import Loader from "../components/Loader/Loader";

const Home = () => {
  const newArrivalData = ["1", "2", "3", "4", "5", "6"];
  const bestSales = ["1", "2", "3", "4", "5", "6"];

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const partsData = data;

  useWindowScrollToTop();

  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Section title="Fresh parts from Japan" productItems={partsData} />
      <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
      />
      <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} />
    </Fragment>
  );
};

export default Home;
