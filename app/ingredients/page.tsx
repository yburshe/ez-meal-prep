import { db } from "@/db/drizzle";
import {ingredient} from "@/db/schema";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default async function Ingredients() {
    const ingredients = await db.select().from(ingredient);
    return (
        <div className="p-4">
            <h1 className="font-semibold text-xl border-b mb-8">Ingredients</h1>
            <div className="grid grid-cols-2 gap-4">
                {ingredients.map((ingredient) => (
                    <div
                        className="border rounded-md p-4 flex flex-col"
                        key={ingredient.ingredient_id}
                    >
                        <h2 className="font-medium text-lg">{ingredient.ingredient_name}</h2>
                        <p>Price: ${ingredient.price}</p>
                        <p>Servings: {ingredient.servings_per_pack} per pack</p>
                        <p>Serving Size: {ingredient.serving_size}</p>
                        <div className="mt-2">
                            <h3 className="font-medium">Nutrition Facts (per serving):</h3>
                            <p>Calories: {ingredient.calories}</p>
                            <p>Total Fat: {ingredient.total_fat}g</p>
                            <p>Total Carbs: {ingredient.total_carbs}g</p>
                            <p>Protein: {ingredient.protein}g</p>
                            <p>Fiber: {ingredient.fiber}g</p>
                            <p>Cholesterol: {ingredient.cholesterol}mg</p>
                            <p>Sodium: {ingredient.sodium}mg</p>
                        </div>
                    </div>
                ))}
            </div>
            <Link
                className="absolute bottom-10 right-10 rounded-full border p-6 shadow-md bg-slate-50"
                href="/ingredients/create"
            >
                <FaPlus/>
            </Link>
        </div>
    );
}
