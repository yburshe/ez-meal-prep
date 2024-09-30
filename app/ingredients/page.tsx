import Link from "next/link";
import { LuPencil, LuPlus, LuTrash } from "react-icons/lu";
import { getIngredients } from "../actions";
import Card from "../components/Card";

export default async function Ingredients() {
  const ingredients = await getIngredients();

  return (
    <div>
      <Link
        className="bg-black text-white hover:bg-neu hover:shadow-lg fixed shadow-md border bottom-10 right-10 p-4 rounded-full"
        href="/ingredients/new"
      >
        <LuPlus className="text-4xl" />
      </Link>
      <div className="mb-4 border-b p-2">
        <h1 className="text-2xl font-bold">Ingredients</h1>
      </div>
      <ul className="flex flex-wrap gap-4">
        {ingredients.map((ingredient) => (
          <Card key={ingredient.id}>
            <div className="p-2 border-b flex justify-between">
              <Link
                className="text-lg font-semibold"
                href={`/ingredients/${ingredient.id}`}
              >
                {ingredient.name}
              </Link>
              <div className="flex gap-2 items-center">
                <Link href={`/ingredients/edit/${ingredient.id}`}>
                  <LuPencil />
                </Link>
                <Link href={`/ingredients/delete/${ingredient.id}`}>
                  <LuTrash />
                </Link>
              </div>
            </div>
            <div className="p-2">
              <p className="text-xl font-semibold mb-2">
                ${ingredient.price}{" "}
                <span className="text-sm font-medium">
                  at {ingredient.storeName}
                </span>
              </p>
              <p className="text-lg">
                {ingredient.servingsPerPack}{" "}
                <span className="text-sm">servings per pack</span>
              </p>
              <p className="text-lg">
                {ingredient.servingSize}{" "}
                <span className="text-sm">serving size</span>
              </p>
            </div>
            <div className="p-2">
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
                    <td className="border p-2">{ingredient.calories}</td>
                    <td className="border p-2">{ingredient.totalFat}</td>
                    <td className="border p-2">{ingredient.totalCarbs}</td>
                    <td className="border p-2">{ingredient.protein}</td>
                    <td className="border p-2">{ingredient.fiber}</td>
                    <td className="border p-2">{ingredient.cholesterol}</td>
                    <td className="border p-2">{ingredient.sodium}</td>
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
