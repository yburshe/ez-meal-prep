import { getIngredients } from "../actions";
import Card from "../components/Card";
import { NewButton } from "../components/Buttons";

export default async function Ingredients() {
  const ingredients = await getIngredients();

  return (
    <div>
      <NewButton type="ingredients" />
      <div className="mb-4 p-2">
        <h1 className="text-2xl font-bold">Ingredients</h1>
      </div>
      <ul className="flex flex-wrap gap-4">
        {ingredients.map((ingredient) => (
          <Card href={`ingredients/${ingredient.id}`} key={ingredient.id}>
            <h2 className="text-lg font-semibold border-b dark:border-neutral-600  pb-2 mb-2">
              {ingredient.name}
            </h2>
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
              <table className="mt-2">
                <thead>
                  <tr>
                    <th className="border dark:border-neutral-600  p-2">Calories</th>
                    <th className="border dark:border-neutral-600  p-2">Total Fat</th>
                    <th className="border dark:border-neutral-600  p-2">Total Carbs</th>
                    <th className="border dark:border-neutral-600  p-2">Protein</th>
                    <th className="border dark:border-neutral-600  p-2">Fiber</th>
                    <th className="border dark:border-neutral-600  p-2">Chol</th>
                    <th className="border dark:border-neutral-600  p-2">Sodium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border dark:border-neutral-600  p-2">{ingredient.calories}</td>
                    <td className="border dark:border-neutral-600  p-2">{ingredient.totalFat}</td>
                    <td className="border dark:border-neutral-600  p-2">{ingredient.totalCarbs}</td>
                    <td className="border dark:border-neutral-600  p-2">{ingredient.protein}</td>
                    <td className="border dark:border-neutral-600  p-2">{ingredient.fiber}</td>
                    <td className="border dark:border-neutral-600  p-2">{ingredient.cholesterol}</td>
                    <td className="border dark:border-neutral-600  p-2">{ingredient.sodium}</td>
                  </tr>
                </tbody>
              </table>
          </Card>
        ))}
      </ul>
    </div>
  );
}
