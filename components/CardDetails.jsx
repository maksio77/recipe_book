import Link from "next/link";
import { Container, Row, Col, Image, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import DATA from "@/data/data";


const CardDetails = ({mealId}) => {
      const findMeal = DATA.filter(meal => {
            if(meal.id === mealId) {
                  return meal;
            }
      });

      const meal = findMeal[0];

      return (
            <Container>
                  <Row className="justify-content-md-center">
                        <Col md="auto">
                              <h1 className="m-3 text-center">{meal.name}</h1>
                              <Image className="m-3" thumbnail src={meal.image} alt={meal.name} width={600} height={600}/>
                        </Col>
                  </Row>
                  <Row>
                        <Col>
                              <div className="m-3">
                                    <h3 className="m-3">Інгредієнти :</h3>
                                    <ListGroup as="ol" numbered>
                                          {meal.ingredients.map( ingredient => (
                                                <ListGroup.Item as="li" variant="dark">{ingredient.toUpperCase()}</ListGroup.Item>
                                          ))}
                                    </ListGroup>
                              </div>
                        </Col>
                        <Col>
                              <div className="m-3">
                                    <h3 className="m-3">Кроки приготування :</h3>
                                    <ListGroup>
                                          {meal.instructions.map( instruction => (
                                                <ListGroupItem variant="light">{instruction}</ListGroupItem>
                                          ))}
                                    </ListGroup>
                                    <Link href='/'>
                                          <Button className="m-3">
                                                Повернутись до усіх страв
                                          </Button>
                                    </Link>
                              </div> 
                        </Col>
                  </Row>
            </Container>
      )
}

export default CardDetails;