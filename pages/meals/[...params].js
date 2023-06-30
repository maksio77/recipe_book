import { useRouter } from "next/router";


import DATA from "@/data/data";


const MealDetailPage = () => {
      const router = useRouter()
      const params = router.query.params
      const id = params[1]; 

      const findMeal = DATA.filter(meal => {
            if(meal.id === id) {
                  return meal;
            }
      });

      console.log(findMeal);

      return (
            <div>MealDetailPage </div>
      )
}

export default MealDetailPage;