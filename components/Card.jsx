import Image from "next/image";
import Link from "next/link";
import { Card, Button, Col } from "react-bootstrap";


const MealCard = ({meal}) => {
      const truncatedText = meal.instructions[0].slice(0, 40);

      return (
      <Col>
            <Card style={{ width: '18rem', height: '25rem' }} className="border-black border-3 mb-3 mt-3">
                  {/* <Card.Img variant="top" src={meal.image} width={200} height={200} /> */}
                  <Image src={meal.image} width={282} height={200} alt={meal.name}/>
                  <Card.Body>
                        <Card.Title>{meal.name}</Card.Title>
                        <Card.Text className="">{truncatedText}...</Card.Text>
                        <Link href={`/meals/${meal.type}/${meal.id}`}>
                              <Button variant="dark">Детальніше</Button>
                        </Link>
                  </Card.Body>
            </Card>
      </Col>
      )
}

export default MealCard