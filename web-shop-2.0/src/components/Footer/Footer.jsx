import React from "react";
import "./style.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const phoneNumber = "+38595555444";
  const emailAddress = "contact@jpnauto.hr";
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <Link to="/">
              <div className="logo">
                <img src="https://res.cloudinary.com/dygasiqvo/image/upload/v1710268585/jpnautoimport-logo_eec6na.png"></img>
              </div>
            </Link>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Quick Access</h2>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Inventory</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2 style={{ textAlign: "center" }}>Hours</h2>
            <ul>
              <li className="working-hours m-0">
                <p className="day">Monday</p>{" "}
                <p className="hour">0800 - 1700 </p>
              </li>
              <li className="working-hours m-0">
                <p className="day">Tuesday</p>{" "}
                <p className="hour">0800 - 1700</p>{" "}
              </li>
              <li className="working-hours m-0">
                <p className="day">Wednesday</p>{" "}
                <p className="hour">0800 - 1700</p>{" "}
              </li>
              <li className="working-hours m-0">
                <p className="day">Thursday</p>{" "}
                <p className="hour">0800 - 1700</p>{" "}
              </li>
              <li className="working-hours m-0">
                <p className="day">Friday</p>{" "}
                <p className="hour">0800 - 1700</p>{" "}
              </li>
              <li className="working-hours m-0">
                <p className="day">Saturday</p>{" "}
                <p className="hour">0900 - 1400</p>{" "}
              </li>{" "}
              <li className="working-hours m-0">
                <p className="day">Sunday</p> <p className="hour">Closed</p>{" "}
              </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>Ulica Bana Berislavica, Split 2100, Croatia</li>
              <li>
                Email: <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
              </li>
              <li>
                {" "}
                Phone: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              </li>
              <li>
                <Button>Map & Hours</Button>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
