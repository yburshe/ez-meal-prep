import {createIngredient} from "@/app/actions/createIngredient";

export default function CreateIngredient() {
    return (
        <div className="p-4">
            <h1 className="border-b font-semibold text-xl mb-8">Add a new store</h1>
            <form className="flex flex-col gap-4 items-center" action={createIngredient}>
                <label className="block">
                    Ingredient Name
                    <input className="block border rounded-md" type="text" name="ingredient_name"/>
                </label>
                <label>
                    Store Id
                    <input className="block border rounded-md" type="number" name="store_id"/>
                </label>
                <label>
                    Price
                    <input className="block border rounded-md" type="text" name="price"/>
                </label>
                <label>
                    Serving Per Pack
                    <input className="block border rounded-md" type="text" name="servings_per_pack"/>
                </label>
                <label>
                    Serving Size
                    <input className="block border rounded-md" type="text" name="serving_size"/>
                </label>
                <label>
                    Calories
                    <input className="block border rounded-md" type="number" name="calories"/>
                </label>
                <label>
                    Total Fat
                    <input className="block border rounded-md" type="number" name="total_fat"/>
                </label>
                <label>
                    Total Carbs
                    <input className="block border rounded-md" type="number" name="total_carbs"/>
                </label>
                <label>
                    Protein
                    <input className="block border rounded-md" type="number" name="protein"/>
                </label>
                <label>
                    Fiber
                    <input className="block border rounded-md" type="number" name="fiber"/>
                </label>
                <label>
                    Cholesterol
                    <input className="block border rounded-md" type="number" name="cholesterol"/>
                </label>
                <label>
                    Sodium
                    <input className="block border rounded-md" type="number" name="sodium"/>
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
