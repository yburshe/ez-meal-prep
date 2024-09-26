"use server";
import { db } from "@/db/drizzle";
import { ingredient } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function editIngredient(formData: FormData) {
    const ingredient_id = parseInt(formData.get("ingredient_id") as string, 10);
    const ingredient_name = formData.get("ingredient_name") as string;
    const store_id = parseInt(formData.get("store_id") as string, 10);
    const price = parseFloat(formData.get("price") as string).toString();
    const servings_per_pack = formData.get("servings_per_pack") as string;
    const serving_size = formData.get("serving_size") as string;
    const calories = parseInt(formData.get("calories") as string, 10);
    const total_fat = parseInt(formData.get("total_fat") as string, 10);
    const total_carbs = parseInt(formData.get("total_carbs") as string, 10);
    const protein = parseInt(formData.get("protein") as string, 10);
    const fiber = parseInt(formData.get("fiber") as string, 10);
    const cholesterol = parseInt(formData.get("cholesterol") as string, 10);
    const sodium = parseInt(formData.get("sodium") as string, 10);

    await db.update(ingredient).set({
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
    }).where(eq(ingredient.ingredient_id, ingredient_id));
}