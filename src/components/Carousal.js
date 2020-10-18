import React from "react";
import { Carousel } from "react-bootstrap";

const CarousalCustom = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ objectFit: "cover" }}
          height={"300px"}
          className="d-block w-100"
          src={
            "https://firebasestorage.googleapis.com/v0/b/green-kitchen-demo.appspot.com/o/pexels-sarthak-4331489%20(1).jpg?alt=media&token=b970bebd-213e-40da-a410-55a3ab716033"
          }
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ objectFit: "cover" }}
          height={"300px"}
          className="d-block w-100"
          src={
            "https://firebasestorage.googleapis.com/v0/b/green-kitchen-demo.appspot.com/o/pexels-surabhi-siddaiah-1051399-min.jpg?alt=media&token=1b2a8871-2590-4746-9391-c33c2253bb57"
          }
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ objectFit: "cover" }}
          height={"300px"}
          className="d-block w-100"
          src={
            "https://firebasestorage.googleapis.com/v0/b/green-kitchen-demo.appspot.com/o/pexels-ella-olsson-1640777-min.jpg?alt=media&token=cf6971c3-b230-4968-81eb-95279c02c2bb"
          }
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarousalCustom;
