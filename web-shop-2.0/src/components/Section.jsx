import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard/ProductCard";

const Section = ({ title, bgColor, productItems, style }) => {
  console.log("DATA COMMING IN", productItems);
  return (
    <section style={{ background: bgColor }}>
      <Container>
        {console.log("FORMATED DATA =====>", productItems)}
        <div className="heading">
          <h1>{title}</h1>
        </div>
        <Row className="justify-content-center">
          {productItems.slice(2, 5).map((product) => {
            return (
              <ProductCard
                key={product.id}
                title={product.name}
                productItem={product}
                style={style}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Section;
