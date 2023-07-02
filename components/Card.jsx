import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "@/redux/slices/favoriteSlice";
import Image from "next/image";
import Link from "next/link";
import { Card, Button, Col } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const MealCard = ({ meal }) => {
  const favorites = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();

  const existingElement = favorites.find((item) => item.id === meal.id);

  const truncatedText = meal.instructions[0].slice(0, 40);

  function onFavorite() {
    if (!existingElement) {
      dispatch(addToFavorite(meal));
    } else {
      dispatch(removeFromFavorite(meal));
    }
  }

  return (
    <Col md='auto'>
      <Card
        style={{ width: "18rem", height: "25rem" }}
        className="border-black border-3 mb-3 mt-3"
      >
        {/* <Card.Img variant="top" src={meal.image} width={200} height={200} /> */}
        <Image src={meal.image} width={282} height={200} alt={meal.name} />
        <Card.Body>
          <Card.Title>{meal.name}</Card.Title>
          <Card.Text className="">{truncatedText}...</Card.Text>
          <Link className="mr-3" href={`/meals/${meal.type}/${meal.id}`}>
            <Button variant="dark">Детальніше</Button>
          </Link>
          {existingElement ? (
            <AiFillStar
              size={25}
              className="m-3"
              onClick={() => onFavorite()}
            />
          ) : (
            <AiOutlineStar
              size={25}
              className="m-3"
              onClick={() => onFavorite()}
            />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MealCard;
