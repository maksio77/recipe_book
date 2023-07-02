import { Container, Row } from "react-bootstrap";
import MealCard from "./Card";

const CardList = ({meals}) => {
  return (
    <>
      {meals.length != 0 ? (<Container>
        <Row >
          {
            meals.map(meal => {
              return <MealCard key={meal.id} meal={meal}/>
            })
          }
        </Row>
      </Container>) : <h1 className="d-flex justify-content-center text-danger">Ви не маєте обраних страв 😕</h1>}
    </>
  )
}

export default CardList