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
    <div
      className="flex items-center justify-between space-x-4 bg-stone-800 px-4 py-4 text-stone-200 sm:px-6"
      uppercase
      text-sm
      md:text-base
    >
      <p className="font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
