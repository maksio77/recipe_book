import { useState } from 'react';
import { Form, Button, Modal} from 'react-bootstrap';
import DATA from '@/data/data';


const AddRecipe = () => {
      const [show, setShow] = useState(false);
      const [title, setTitle] = useState('');
      const [instructions, setInstructions] = useState('');
      const [ingredients, setIngredient] = useState('');
      const [type, setType] = useState('');

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      function transformToArray(str, separator) {
            const arr = str.split(separator);
            return arr;
      };

      function addRecipe() {
            console.log(DATA);
            DATA.push(
                  {
                        id: Date.now(),
                        image: 'https://images.unian.net/photos/2021_03/thumb_files/1200_0_1614764604-6564.jpg',
                        name: title,
                        ingredients: transformToArray(ingredients, ','),
                        instructions: transformToArray(instructions, '.'),
                        type,
                  }
            );
            handleClose();
      };

      return (
            <>
                  <Button variant="primary" onClick={handleShow}>
                        Додати власний рецепт
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                              <Modal.Title>Додайте власний рецепт</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                              <Form>
                                    <Form.Group className="mb-3" controlId="Name">
                                          <Form.Label>Назва страви</Form.Label>
                                          <Form.Control type="text" onChange={(e) => setTitle(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Type">
                                          <Form.Label>Тип страви</Form.Label>
                                          <Form.Select className="mb-3" aria-label="Default select example" onChange={(e) => setType(e.target.value)}>
                                                <option value="default">Обрати</option>
                                                <option value="breakfaast">Breakfast</option>
                                                <option value="lunch">Lunch</option>
                                                <option value="dinner">Dinner</option>
                                                <option value="dessert">Dessert</option>
                                          </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Ingredients">
                                          <Form.Label>Інгредієнти</Form.Label>
                                          <Form.Control type="text" onChange={(e) => setIngredient(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group
                                          className="mb-3"
                                          controlId="Instructions"
                                    >
                                          <Form.Label>Кроки приготування</Form.Label>
                                          <Form.Control as="textarea" rows={3} onChange={(e) => setInstructions(e.target.value)}/>
                                    </Form.Group>
                              </Form>
                        </Modal.Body>
                        <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                    Відмінити
                              </Button>
                              <Button variant="primary" onClick={addRecipe}>
                                    Додати
                              </Button>
                        </Modal.Footer>
                  </Modal>
            </>
      )
}

export default AddRecipe;