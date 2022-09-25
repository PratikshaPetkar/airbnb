import Temp from "../images/katie-zaferes.png";
// source -- Card
// destination -- images
//here accessed values through props

export default function Card(props) {
  return (
    <div>
      <img src={Temp} alt="katie-zaferes" />
      <h1>{props.rating}</h1>
      <span>{props.reviewCount}</span>
      <span>{props.location}</span>
      <p>{props.title}</p>
      <p>{props.price}</p>
    </div>
  );
}
