"use server";
import { db } from "@/db/drizzle";
import { store } from "@/db/schema";
import {eq} from "drizzle-orm";

export async function editStore(formData: FormData) {
    

    const store_id = Number(formData.get("store_id"))
    const store_name = formData.get("store_name") as string;
    const street_number = Number(formData.get("street_number"));
    const street_name = formData.get("street_name") as string;
    const city = formData.get("city") as string;
    const state = formData.get("state") as string;
    const zip = formData.get("zip") as string;

    await db.update(store).set({
      store_name,
      street_number,
      street_name,
      city,
      state,
      zip,
    }).where(eq(store.store_id, store_id));
  }