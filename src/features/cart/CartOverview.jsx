import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuatity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuatity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) {
    return null;
  }

  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-stone-700 bg-stone-950 px-4 py-4 text-sm text-stone-100 uppercase shadow-2xl shadow-stone-950/30 sm:px-6 md:text-base">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <p className="flex flex-wrap gap-x-6 gap-y-1 font-bold text-stone-200">
          <span>{totalCartQuantity} pizzas</span>
          <span>{formatCurrency(totalCartPrice)}</span>
        </p>
        <Link
          to="/cart"
          className="rounded-full bg-amber-400 px-4 py-2 text-xs font-extrabold whitespace-nowrap text-stone-950 transition-colors hover:bg-amber-300 focus:ring-4 focus:ring-amber-200 focus:outline-none"
        >
          Open cart &rarr;
        </Link>
      </div>
    </div>
  );
}

export default CartOverview;
