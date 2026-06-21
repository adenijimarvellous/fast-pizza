import { useState } from "react";
import { Form, redirect, useNavigation, useActionData } from "react-router-dom";
import { createOrder } from "../../service/apiRestaurant";
import Button from "../../UI/Button";
import EmptyCart from "../cart/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import store from "../../store";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6">
        <p className="text-sm font-bold tracking-[0.18em] text-amber-600 uppercase">
          Delivery details
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-stone-950">
          Ready to order? Let's go!
        </h2>
      </div>

      <Form
        method="POST"
        className="rounded-3xl border border-stone-200 bg-white p-5 shadow-xl shadow-stone-200/70 sm:p-8"
      >
        <div className="mb-5 grid gap-2 sm:grid-cols-[11rem_1fr] sm:items-center">
          <label className="text-sm font-bold text-stone-700">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input w-full"
            defaultValue={username}
          />
        </div>

        <div className="mb-5 grid gap-2 sm:grid-cols-[11rem_1fr] sm:items-start">
          <label className="pt-3 text-sm font-bold text-stone-700">
            Phone number
          </label>
          <div>
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="mt-2 rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 grid gap-2 sm:grid-cols-[11rem_1fr] sm:items-start">
          <label className="pt-3 text-sm font-bold text-stone-700">
            Address
          </label>
          <div>
            <div className="relative">
              <input
                key={address}
                type="text"
                name="address"
                required
                disabled={isLoadingAddress}
                defaultValue={address}
                className="input w-full"
              />

              {!position.latitude && !position.longitude && (
                <span className="mt-3 flex sm:absolute sm:top-1.5 sm:right-1.5 sm:mt-0">
                  <Button
                    type="small"
                    disabled={isLoadingAddress}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(fetchAddress());
                    }}
                  >
                    Get Position
                  </Button>
                </span>
              )}
            </div>
            {addressStatus === "error" && (
              <p className="mt-2 rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700">
                {errorAddress}
              </p>
            )}
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <div className="flex items-center gap-4">
            <input
              className="h-5 w-5 rounded border-stone-300 accent-amber-400 focus:ring-4 focus:ring-amber-200 focus:ring-offset-2 focus:outline-none"
              type="checkbox"
              name="priority"
              id="priority"
              value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
            />
            <label
              htmlFor="priority"
              className="text-sm font-bold text-stone-800"
            >
              Want to give your order priority?
            </label>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude}, ${position.longitude}`
                : ""
            }
          />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting || isLoadingAddress
              ? "Placing order..."
              : `Order for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  console.log(order);
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = "Please give us a valid phone number";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
