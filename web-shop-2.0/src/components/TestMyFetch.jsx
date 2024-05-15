import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../app/features/dataSlice";

const TestMyFetch = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return console.log("It works!!", data);
};

export default TestMyFetch;
