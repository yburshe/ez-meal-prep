import { db } from "@/db/drizzle";
import { ingredient } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const ingredientDetails = await db
    .select()
    .from(ingredient)
    .where(eq(ingredient.id, params.id))
    .limit(1);

  return Response.json(ingredientDetails);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const storeId = Number(formData.get("storeId"));
  const price = formData.get("price") as string;
  const servingsPerPack = formData.get("servingsPerPack") as string;
  const servingSize = formData.get("servingSize") as string;
  const calories = Number(formData.get("calories"));
  const totalFat = Number(formData.get("totalFat"));
  const totalCarbs = Number(formData.get("totalCarbs"));
  const protein = Number(formData.get("protein"));
  const fiber = Number(formData.get("fiber"));
  const cholesterol = Number(formData.get("cholesterol"));
  const sodium = Number(formData.get("sodium"));

  const result = await db
    .update(ingredient)
    .set({
      name,
      store_id: storeId,
      price,
      servings_per_pack: servingsPerPack,
      serving_size: servingSize,
      calories,
      total_fat: totalFat,
      total_carbs: totalCarbs,
      protein,
      fiber,
      cholesterol,
      sodium,
    })
    .where(eq(ingredient.id, params.id));

  return Response.json(result);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  const result = await db
    .delete(ingredient)
    .where(eq(ingredient.id, params.id));

  return Response.json(result);
}
