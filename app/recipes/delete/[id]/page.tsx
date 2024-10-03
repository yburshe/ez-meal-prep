import { deleteRecipe, getRecipeDetails } from "@/app/actions";
import DeleteCard from "@/app/components/DeleteCard";

export default async function DeleteRecipe({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const recipeDetails = await getRecipeDetails(params.id);
  const recipeName = recipeDetails[0].name;

  return (
    <DeleteCard serverAction={deleteRecipe} id={params.id} name={recipeName || ""}/>

  );
}
