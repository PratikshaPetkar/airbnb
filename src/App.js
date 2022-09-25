// import logo from './logo.svg';
// import { render } from "@testing-library/react";
import "./App.css";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";


export default function App() {
//always write custom functions abouve return of function app

  const readData = data.map((item) => {
//here applied map method to read already present in data file which is imported file
//set through props while reading 
//item is to traverse over array and 
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })
return (
  <div>
    <Navbar />
    <Gallery/>
    {readData}
  </div>
)
  };
  








  