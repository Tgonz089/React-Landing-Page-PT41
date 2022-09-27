//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Card from "./component/card.jsx";
import Jumbotron from "./component/jumbotron.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#Nav"));

ReactDOM.render(
  <Jumbotron
    title=<strong>A Warm Welcome!</strong>
    paragraph="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    buttonLabel="Call to action!"
  />,
  document.querySelector("#jumbotron")
);

ReactDOM.render(
  <Card
    title="Card Title"
    imageUrl="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png"
    description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    buttonUrl="https://en.wikipedia.org/wiki/JavaScript"
    buttonLabel="Find out More!"
  />,
  document.querySelector("#card")
);
ReactDOM.render(
  <Card
    title="Card Title"
    imageUrl="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png"
    description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    buttonUrl="https://en.wikipedia.org/wiki/JavaScript"
    buttonLabel="Find out More!"
  />,
  document.querySelector("#card2")
);
ReactDOM.render(
  <Card
    title="Card Title"
    imageUrl="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png"
    description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    buttonUrl="https://en.wikipedia.org/wiki/JavaScript"
    buttonLabel="Find out More!"
  />,
  document.querySelector("#card3")
);
ReactDOM.render(
  <Card
    title="Card Title"
    imageUrl="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png"
    description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    buttonUrl="https://en.wikipedia.org/wiki/JavaScript"
    buttonLabel="Find out More!"
  />,
  document.querySelector("#card4")
);
