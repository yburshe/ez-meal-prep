import { db } from "@/db/drizzle";
import { ingredient } from "@/db/schema";

export async function createIngredient(formData: FormData) {
    "use server";

    const ingredient_name = formData.get("ingredient_name") as string;
    const store_id = Number(formData.get("store_id"));
    const price = parseFloat(formData.get("price") as string).toString();
    const servings_per_pack = formData.get("servings_per_pack") as string;
    const serving_size = formData.get("serving_size") as string;
    const calories = Number(formData.get("calories"));
    const total_fat = Number(formData.get("total_fat"));
    const total_carbs = Number(formData.get("total_carbs"));
    const protein = Number(formData.get("protein"));
    const fiber = Number(formData.get("fiber"));
    const cholesterol = Number(formData.get("cholesterol"));
    const sodium = Number(formData.get("sodium"));

    await db.insert(ingredient).values({
        ingredient_name,
        store_id,
        price,
        servings_per_pack,
        serving_size,
        calories,
        total_fat,
        total_carbs,
        protein,
        fiber,
        cholesterol,
        sodium,
    });
}