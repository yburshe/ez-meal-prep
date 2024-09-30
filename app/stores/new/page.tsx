import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { createStore } from "@/app/actions";
import usStates from "@/db/usStates.json";

export default function NewStore() {
  return (
    <div>
      <div className="mb-8 gap-2 flex border-b p-2 items-center">
        <Link
          className="flex gap-2 px-4 py-2 rounded-sm items-center"
          href="/stores"
        >
          <LuArrowLeft className="text-xl" />
        </Link>
        <h1 className="text-2xl font-bold">Add a new store</h1>
      </div>
      <form
        action={createStore}
        className="m-2 flex flex-col items-center gap-6"
      >
        <label>
          <p className="text-sm text-neutral-600">Name</p>
          <input
            className="border w-56 p-1 rounded-md mt-1 block"
            type="text"
            name="name"
          />
        </label>
        <label>
          <p className="text-sm text-neutral-600">Street Number</p>
          <input
            className="border w-56 p-1 rounded-md mt-1 block"
            type="number"
            name="streetNumber"
          />
        </label>
        <label>
          <p className="text-sm text-neutral-600">Street Name</p>
          <input
            className="border w-56 p-1 rounded-md mt-1 block"
            type="text"
            name="streetName"
          />
        </label>
        <label>
          <p className="text-sm text-neutral-600">City</p>
          <input
            className="border w-56 p-1 rounded-md mt-1 block"
            type="text"
            name="city"
          />
        </label>
        <label>
          <p className="text-sm text-neutral-600">State</p>
          <select
            className="border w-56 p-2 bg-white rounded-sm block"
            name="state"
          >
            {usStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>
        <label>
          <p className="text-sm text-neutral-600">Zip</p>
          <input
            className="border w-56 p-1 rounded-md mt-1 block"
            type="text"
            name="zip"
          />
        </label>
        <button className="mt-8 hover:bg-slate-50 border shadow-sm w-56 p-1 px-3 py-2 rounded-md">
          Create
        </button>
      </form>
    </div>
  );
}
