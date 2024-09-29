import { db } from "@/db/drizzle";
import { store } from "@/db/schema";

export async function GET() {
  const stores = await db.select().from(store);
  return Response.json({stores});
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const streetNumber = Number(formData.get("streetNumber"));
  const streetName = formData.get("streetName") as string;
  const city = formData.get("city") as string;
  const state = formData.get("state") as string;
  const zip = formData.get("zip") as string;

  const result = await db.insert(store).values({
    name,
    street_number: streetNumber,
    street_name: streetName,
    city,
    state,
    zip,
  });

  return Response.json({ result });
}