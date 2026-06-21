import LinkButton from "../../UI/LinkButton";

function EmptyCart() {
  return (
    <div className="mx-auto max-w-2xl">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <div className="mt-5 rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-xl shadow-stone-200/70">
        <p className="text-2xl font-extrabold text-stone-950">
          Your cart is empty
        </p>
        <p className="mt-3 text-sm leading-6 text-stone-600">
          Your cart is still empty. Start adding some pizzas :)
        </p>
      </div>
    </div>
  );
}

export default EmptyCart;
