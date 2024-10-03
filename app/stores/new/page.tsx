import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { createStore } from "@/app/actions";
import usStates from "@/db/usStates.json";
import { Button } from "@/app/components/Buttons";

export default function NewStore() {
  return (
    <div>
      <div className="mb-8 gap-2 flex p-2 items-center">
        <Link
          className="flex gap-2 px-4 py-2 items-center"
          href="/stores"
        >
          <LuArrowLeft className="text-xl" />
        </Link>
        <h1 className="text-2xl font-bold">Add a new store</h1>
      </div>
      <form
        action={createStore}
        className="w-56 mx-auto m-2 flex flex-col items-center gap-6"
      >
        <label>
          <p className="text-sm text-neutral-600 dark:text-neutral-200">Name</p>
          <input
            className="dark:bg-neutral-800 border dark:border-neutral-950 w-56 p-1 rounded-md mt-1 block"
            type="text"
            name="name"
          />
        </label>
        <label>
          <p className="text-sm text-neutral-600 dark:text-neutral-200">Street Number</p>
          <input
            className="dark:bg-neutral-800 border dark:border-neutral-950 w-56 p-1 rounded-md mt-1 block"
            type="number"
            name="streetNumber"
          />
        </label>
        <label>
          <p className="text-sm text-neutral-600 dark:text-neutral-200">Street Name</p>
          <input
            className="dark:bg-neutral-800 border dark:border-neutral-950 w-56 p-1 rounded-md mt-1 block"
            type="text"
            name="streetName"
          />
        </label>
        <label>
          <p className="text-sm text-neutral-600 dark:text-neutral-200">City</p>
          <input
            className="dark:bg-neutral-800 border dark:border-neutral-950 w-56 p-1 rounded-md mt-1 block"
            type="text"
            name="city"
          />
        </label>
        <label>
          <p className="text-sm text-neutral-600 dark:text-neutral-200">State</p>
          <select
            className="dark:bg-neutral-800 dark:border-neutral-950 border w-56 p-2 bg-white rounded-md block"
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
          <p className="text-sm text-neutral-600 dark:text-neutral-200">Zip</p>
          <input
            className="dark:bg-neutral-800 border dark:border-neutral-950 w-56 p-1 rounded-md mt-1 block"
            type="text"
            name="zip"
          />
        </label>
        <Button text="Add Store"/>
      </form>
    </div>
  );
}
