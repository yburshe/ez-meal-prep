import { createStore } from "@/app/actions/createStore";

export default function CreateStore() {
  return (
    <div className="p-4">
      <h1 className="border-b font-semibold text-xl mb-8">Add a new store</h1>
      <form className="flex flex-col gap-4 items-center" action={createStore}>
        <label className="block">
          Store Name
          <input
            className="block border rounded-md"
            type="text"
            name="store_name"
          />
        </label>
        <label>
          Street Number
          <input
            className="block border rounded-md"
            type="number"
            name="street_number"
          />
        </label>
        <label>
          Street Name
          <input
            className="block border rounded-md"
            type="text"
            name="street_name"
          />
        </label>
        <label>
          City
          <input className="block border rounded-md" type="text" name="city" />
        </label>
        <label>
          State
          <input className="block border rounded-md" type="text" name="state" />
        </label>
        <label>
          Zip
          <input className="block border rounded-md" type="text" name="zip" />
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
