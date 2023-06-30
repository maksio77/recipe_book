import { Container, Row } from "react-bootstrap";
import MealCard from "./Card";

const CardList = ({meals}) => {
  return (
    <Container>
      <Row>
        {
          meals.map(meal => {
            return <MealCard key={meal.id} meal={meal}/>
          })
        }
      </Row>
    </Container>
  )
}

export default CardList