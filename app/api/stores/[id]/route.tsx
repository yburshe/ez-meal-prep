import { db } from "@/db/drizzle";
import { ingredient, store } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const storeDetails = await db
    .select()
    .from(store)
    .where(eq(store.id, params.id))
    .limit(1);
  return Response.json(storeDetails);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const streetNumber = Number(formData.get("streetNumber"));
  const streetName = formData.get("streetName") as string;
  const city = formData.get("city") as string;
  const state = formData.get("state") as string;
  const zip = formData.get("zip") as string;

  const result = await db
    .update(store)
    .set({
      name,
      street_number: streetNumber,
      street_name: streetName,
      city,
      state,
      zip,
    })
    .where(eq(store.id, params.id));

  return Response.json({ result });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  const unassignedStoreId = 0;

  const setStore = await db
    .update(ingredient)
    .set({ store_id: unassignedStoreId })
    .where(eq(ingredient.store_id, params.id));

  const result = await db.delete(store).where(eq(store.id, params.id));

  return Response.json(result);
}
