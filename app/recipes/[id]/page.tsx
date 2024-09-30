import { getRecipeDetails } from "@/app/actions";
import Link from "next/link";
import { LuArrowLeft, LuPencil, LuTrash } from "react-icons/lu";

export default async function Recipe({ params }: { params: { id: number } }) {
  const recipeDetails = await getRecipeDetails(params.id);

  return (
    <div>
      <div className="mb-8 flex justify-between border-b items-center">
        <div className="gap-2 flex p-2 items-center">
          <Link
            className="flex gap-2 px-4 py-2 rounded-sm items-center"
            href="/recipes"
          >
            <LuArrowLeft className="text-xl" />
          </Link>
          <h1 className="text-2xl font-bold">{recipeDetails[0].name}</h1>
        </div>
        <div className="flex gap-4 items-center p-2">
          <Link href={`/recipes/edit/${recipeDetails[0].id}`}>
            <LuPencil className="text-xl" />
          </Link>
          <Link href={`/recipes/delete/${recipeDetails[0].id}`}>
            <LuTrash className="text-xl" />
          </Link>
        </div>
      </div>
      <div>
        <div>Price: ${recipeDetails[0].totalPrice}</div>
        <div>Total Calories: {recipeDetails[0].totalCalories}</div>
        <div>Total Fat: {recipeDetails[0].totalFat}</div>
        <div>Total Carbs: {recipeDetails[0].totalCarbs}</div>
        <div>Total Protein: {recipeDetails[0].totalProtein}</div>
        <div>Total Fiber: {recipeDetails[0].totalFiber}</div>
        <div>Total Cholesterol: {recipeDetails[0].totalCholesterol}</div>
        <div>Total Sodium: {recipeDetails[0].totalSodium}</div>
      </div>
      <div>
        <h2 className="text-xl font-bold mt-4 mb-2">Ingredients</h2>
        <ul>
          {recipeDetails[0].ingredients.map((ingredient) => (

            <li className="p-2 border rounded-md" key={ingredient.id}>
              <div>Name: {ingredient.name}</div>
              <div>Servings: {ingredient.quantity}</div>
              <div>Price: ${ingredient.price}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
