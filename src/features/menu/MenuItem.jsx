import { formatCurrency } from "../../utils/helpers";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm shadow-stone-200/70 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-300/60">
      <div className="flex h-full flex-col sm:flex-row">
        <img
          src={imageUrl}
          alt={name}
          className={`${soldOut ? "opacity-70 grayscale" : ""} h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-auto sm:w-36`}
        />
        <div className="flex grow flex-col p-4">
          <p className="text-lg font-bold text-stone-950">{name}</p>
          <p className="mt-1 text-sm leading-6 text-stone-500 capitalize italic">
            {ingredients.join(", ")}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            {!soldOut ? (
              <p className="text-sm font-extrabold tracking-wide text-stone-900 uppercase">
                {formatCurrency(unitPrice)}
              </p>
            ) : (
              <p className="rounded-full bg-stone-100 px-3 py-1 text-xs font-bold tracking-wide text-stone-500 uppercase">
                Sold out
              </p>
            )}

            {isInCart && (
              <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                <UpdateItemQuantity
                  pizzaId={id}
                  currentQuantity={currentQuantity}
                />
                <DeleteItem pizzaId={id} />
              </div>
            )}

            {!soldOut && !isInCart && (
              <Button type="small" onClick={handleAddToCart}>
                Add to cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
