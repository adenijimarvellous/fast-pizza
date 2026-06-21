import LinkButton from "../../UI/LinkButton";
import Button from "../../UI/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className="mx-auto max-w-4xl">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <div className="mt-5 rounded-3xl border border-stone-200 bg-white p-5 shadow-xl shadow-stone-200/70 sm:p-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-bold tracking-[0.18em] text-amber-600 uppercase">
              Checkout
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-stone-950">
              Your cart, {username}
            </h2>
          </div>
        </div>

        <ul className="divide-y divide-stone-200">
          {cart.map((item) => (
            <CartItem item={item} key={item.pizzaId} />
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/order/new" type="primary">
            Order pizzas
          </Button>

          <Button type="secondary" onClick={() => dispatch(clearCart())}>
            Clear cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
