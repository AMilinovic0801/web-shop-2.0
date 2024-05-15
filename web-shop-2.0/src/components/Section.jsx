import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard/ProductCard";

const Section = ({ title, bgColor, productItems }) => {
  console.log("DATA COMMING IN", productItems);
  return (
    <section style={{ background: bgColor }}>
      <Container>
        <div className="heading">
          <h1>{title}</h1>
        </div>
        <Row className="justify-content-center">
          {productItems.slice(5, 11).map((part) => {
            return (
              <ProductCard
                key={part.partsId}
                title={part.partName}
                productItem={part}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Section;
