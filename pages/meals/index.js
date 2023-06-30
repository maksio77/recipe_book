import { Tabs, Tab } from 'react-bootstrap';

import CardList from '@/components/CardList';
import DATA from '@/data/data';

const MealsPage = () => {
      function mealsKind(type, data) {
            const meals = data.filter(item => {
                  if (item.type === type) {
                        return item;
                  }
            });

            return meals;
      };

      return (
      <>
            <Tabs
                  defaultActiveKey="breakfast"
                  className="mb-3"
                  id="fill-tab-example"
                  fill
            >
                  <Tab eventKey="breakfast" title="Breakfast">
                        <CardList meals={mealsKind('breakfast', DATA)}/>
                  </Tab>
                  <Tab eventKey="lunch" title="Lunch">
                        <CardList meals={mealsKind('lunch', DATA)}/>
                  </Tab>
                  <Tab eventKey="dinner" title="Dinner">
                        <CardList meals={mealsKind('dinner', DATA)}/>
                  </Tab>
                  <Tab eventKey="dessert" title="Dessert">
                        <CardList meals={mealsKind('dessert', DATA)}/>
                  </Tab>
            </Tabs>
      </>
      )
}

export default MealsPage