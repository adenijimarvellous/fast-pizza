import { formatCurrency } from "../../utils/helpers";
import Button from "../../UI/Button";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-5 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`${soldOut ? "opacity-70 grayscale" : ""} h-24`}
      />
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto">
          {!soldOut ? (
            <p className="text-sm font-medium text-stone-500 uppercase">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p>Sold out</p>
          )}

          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
