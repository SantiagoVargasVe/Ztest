import { Link } from "react-router-dom";

export default function AgentsNotFound() {
  return (
    <div className="w-full h-full flex justify-start items-center mt-32 flex-col gap-32">
      <h5 className="text-3xl font-bold">
        No available Agents based on your income. Please try a different income
        value.
      </h5>

      <Link className="font-bold text-2xl text-highlight" to="/">
        Go back to home
      </Link>
    </div>
  );
}
