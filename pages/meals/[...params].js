import { useRouter } from "next/router";
import CardDetails from "@/components/CardDetails";


const MealDetailPage = () => {
      const router = useRouter()
      const params = router.query.params
      const id = params[1]; 

      return (
            <CardDetails mealId={id}/>
      )
}

export default MealDetailPage;