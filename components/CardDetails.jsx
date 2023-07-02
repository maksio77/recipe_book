import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "@/redux/slices/favoriteSlice";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import DATA from "@/data/data";

const CardDetails = ({ mealId }) => {
  const favorites = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();

  const findMeal = DATA.filter((meal) => {
    if (meal.id === mealId) {
      return meal;
    }
  });

  const meal = findMeal[0];

  const existingElement = favorites.find((item) => item.id === meal.id);

  function onFavorite() {
    if (!existingElement) {
      dispatch(addToFavorite(meal));
    } else {
      dispatch(removeFromFavorite(meal));
    }
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Row>
            <Col>
              <h1 className="m-3 text-center">{meal.name}</h1>
            </Col>
            <Col md="auto" className="mt-3">
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
            </Col>
          </Row>
          <Image
            className="m-3"
            thumbnail
            src={meal.image}
            alt={meal.name}
            width={600}
            height={600}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="m-3">
            <h3 className="m-3">Інгредієнти :</h3>
            <ListGroup as="ol" numbered>
              {meal.ingredients.map((ingredient) => (
                <ListGroup.Item as="li" variant="dark">
                  {ingredient.toUpperCase()}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>
        <Col>
          <div className="m-3">
            <h3 className="m-3">Кроки приготування :</h3>
            <ListGroup>
              {meal.instructions.map((instruction) => (
                <ListGroupItem variant="light">{instruction}</ListGroupItem>
              ))}
            </ListGroup>
            <Link href="/">
              <Button className="m-3">Повернутись до усіх страв</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CardDetails;
