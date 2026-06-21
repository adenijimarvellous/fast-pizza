import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { name, quantity, totalPrice, pizzaId } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-4 sm:flex sm:items-center sm:justify-between sm:gap-6">
      <p className="mb-3 font-semibold text-stone-900 sm:mb-0">
        <span className="mr-2 rounded-full bg-amber-100 px-2 py-1 text-xs font-extrabold text-amber-800">
          {quantity}&times;
        </span>
        {name}
      </p>
      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-5">
        <p className="text-sm font-extrabold text-stone-950">
          {formatCurrency(totalPrice)}
        </p>

        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
