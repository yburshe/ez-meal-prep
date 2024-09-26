import {createIngredient} from "@/app/actions/createIngredient";
import { db } from "@/db/drizzle";
import { store } from "@/db/schema";

export default async function CreateIngredient() {

    const stores = await db.select().from(store);

    return (
        <div className="p-4">
            <h1 className="border-b font-semibold text-xl mb-8">Add a new store</h1>
            <form className="w-96 mx-auto flex flex-col gap-4" action={createIngredient}>
                <label className="block">
                    Ingredient Name
                    <input className="w-full p-1 mt-1 block border rounded-md" type="text" name="ingredient_name"/>
                </label>
                <label>
                    Store
                    <select className="mt-1 w-full block border bg-white p-2 rounded-md" name="store_id">
                        {stores.map((store) => (
                            <option key={store.store_id} value={store.store_id}>
                                {store.store_name}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Price
                    <input className="w-full p-1 mt-1 block border rounded-md" type="text" name="price"/>
                </label>
                <label>
                    Serving Per Pack
                    <input className="w-full p-1 mt-1 block border rounded-md" type="text" name="servings_per_pack"/>
                </label>
                <label>
                    Serving Size
                    <input className="w-full p-1 mt-1 block border rounded-md" type="text" name="serving_size"/>
                </label>
                <label>
                    Calories
                    <input className="w-full p-1 mt-1 block border rounded-md" type="number" name="calories"/>
                </label>
                <label>
                    Total Fat
                    <input className="w-full p-1 mt-1 block border rounded-md" type="number" name="total_fat"/>
                </label>
                <label>
                    Total Carbs
                    <input className="w-full p-1 mt-1 block border rounded-md" type="number" name="total_carbs"/>
                </label>
                <label>
                    Protein
                    <input className="w-full p-1 mt-1 block border rounded-md" type="number" name="protein"/>
                </label>
                <label>
                    Fiber
                    <input className="w-full p-1 mt-1 block border rounded-md" type="number" name="fiber"/>
                </label>
                <label>
                    Cholesterol
                    <input className="w-full p-1 mt-1 block border rounded-md" type="number" name="cholesterol"/>
                </label>
                <label>
                    Sodium
                    <input className="w-full p-1 mt-1 block border rounded-md" type="number" name="sodium"/>
                </label>
                <button
                    className="bg-slate-50 hover:bg-slate-100 px-8 py-2 rounded-md shadow-sm mt-4"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
