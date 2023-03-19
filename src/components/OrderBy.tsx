import { ChangeEvent } from "react";
import { SortStrategy } from "../@types/SortStrategy";

type Props = {
  setSortStrategy: (sortStrategy: SortStrategy) => void;
};

function OrderBy({ setSortStrategy }: Props) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const strategy = event.target.value as SortStrategy;
    setSortStrategy(strategy);
  };

  return (
    <div className="flex flex-col w-full gap-[2px]">
      <label className="text-zambezi"> Order agents by</label>

      <select
        onChange={handleChange}
        className="border border-gainsboro indent-4 rounded-md h-10 text-philippine_gray md:w-56"
      >
        <option className="text-philippine_gray" disabled selected hidden>
          Select...
        </option>
        <option className="text-zambezi" value="name">
          Name (A-Z)
        </option>
        <option className="text-zambezi" value="id">
          ID
        </option>
        <option className="text-zambezi" value="high">
          Income: High first
        </option>
        <option className="text-zambezi" value="low">
          Income: Low first
        </option>
      </select>
    </div>
  );
}

export default OrderBy;
