import { LuLoader } from "react-icons/lu";

export default function Loader() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
      <LuLoader className="animate-spin" />
    </div>
  );
}
