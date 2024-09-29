import { db } from "@/db/db";
import { ingredient } from "@/db/schema";
import Link from "next/link";
import { LuPencil, LuPlus, LuTrash } from "react-icons/lu";

export default async function Ingredients() {
  const ingredients = await db.select().from(ingredient);

  return (
    <div>
      <Link
        className="shadow-md border absolute bottom-10 right-10 p-4 rounded-full"
        href="/ingredients/new"
      >
        <LuPlus className="text-4xl" />
      </Link>
      <div className="mb-4 border-b p-2">
        <h1 className="text-2xl font-bold">Ingredients</h1>
      </div>
      <ul className="grid grid-cols-2 gap-4">
        {ingredients.slice(1).map((ingredient) => (
          <div className="border rounded-sm shadow-sm" key={ingredient.id}>
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
              <table>
                <thead>
                  <tr>
                    <th>Cal</th>
                    <th>Fat</th>
                    <th>Carbs</th>
                    <th>Protein</th>
                    <th>Fiber</th>
                    <th>Chol</th>
                    <th>Sodium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{ingredient.calories}</td>
                    <td>{ingredient.total_fat}</td>
                    <td>{ingredient.total_carbs}</td>
                    <td>{ingredient.protein}</td>
                    <td>{ingredient.fiber}</td>
                    <td>{ingredient.cholesterol}</td>
                    <td>{ingredient.sodium}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
