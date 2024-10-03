import { deleteIngredient, getIngredientDetails } from "@/app/actions";
import DeleteCard from "@/app/components/DeleteCard";

export default async function DeleteIngredient({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const ingredientDetails = await getIngredientDetails(params.id);
  const ingredientName = ingredientDetails[0].name;

  return (
    <DeleteCard serverAction={deleteIngredient} id={params.id} name={ingredientName}/>
  );
}
