import Link from "next/link";
import { LuPencil, LuPlus, LuTrash } from "react-icons/lu";
import { getRecipes } from "../actions";
import Card from "../components/Card";

export default async function Recipes() {
  const recipes = await getRecipes();
  return (
    <div>
      <Link
        className="fixed shadow-md border bottom-10 right-10 p-4 rounded-full"
        href="/recipes/new"
      >
        <LuPlus className="text-4xl" />
      </Link>
      <div className="mb-4 border-b p-2">
        <h1 className="text-2xl font-bold">Recipes</h1>
      </div>
      <ul className="flex flex-wrap gap-4">
        {recipes.map((recipe) => (
          <Card key={recipe.id}>
            <div className="p-2 border-b flex justify-between">
              <Link
                className="text-lg font-semibold"
                href={`/recipes/${recipe.id}`}
              >
                {recipe.name}
              </Link>
              <div className="flex gap-2 items-center">
                <Link href={`/recipes/edit/${recipe.id}`}>
                  <LuPencil />
                </Link>
                <Link href={`/recipes/delete/${recipe.id}`}>
                  <LuTrash />
                </Link>
              </div>
            </div>
            <div className="p-2">
              <div className="text-xl font-semibold mb-2">${recipe.totalPrice}</div>
              <table className="border-collapse border">
                <thead>
                  <tr>
                    <th className="border p-2">Calories</th>
                    <th className="border p-2">Total Fat</th>
                    <th className="border p-2">Total Carbs</th>
                    <th className="border p-2">Protein</th>
                    <th className="border p-2">Fiber</th>
                    <th className="border p-2">Chol</th>
                    <th className="border p-2">Sodium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">{recipe.totalCalories}</td>
                    <td className="border p-2">{recipe.totalFat}</td>
                    <td className="border p-2">{recipe.totalCarbs}</td>
                    <td className="border p-2">{recipe.totalProtein}</td>
                    <td className="border p-2">{recipe.totalFiber}</td>
                    <td className="border p-2">{recipe.totalCholesterol}</td>
                    <td className="border p-2">{recipe.totalSodium}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        ))}
      </ul>
    </div>
  );
}
