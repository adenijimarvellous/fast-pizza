import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-4">
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
        <p className="font-semibold text-stone-900">
          <span className="mr-2 rounded-full bg-amber-100 px-2 py-1 text-xs font-extrabold text-amber-800">
            {quantity}&times;
          </span>
          {name}
        </p>
        <p className="font-extrabold text-stone-950">
          {formatCurrency(totalPrice)}
        </p>
      </div>
      <p className="mt-2 text-sm leading-6 text-stone-500 capitalize italic">
        {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
