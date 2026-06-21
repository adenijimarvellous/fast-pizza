// Test ID:  IIDSAT
import OrderItem from "./OrderItem";
import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../service/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") {
        fetcher.load("/menu");
      }
    },
    [fetcher],
  );

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-xl shadow-stone-200/70 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold tracking-[0.18em] text-amber-600 uppercase">
              Tracking
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-stone-950">
              Order #{id}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {priority && (
              <span className="rounded-full bg-red-500 px-3 py-1.5 text-xs font-extrabold tracking-wide text-white uppercase">
                Priority
              </span>
            )}
            <span className="rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-extrabold tracking-wide text-white uppercase">
              {status} order
            </span>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-bold text-stone-950">
              {deliveryIn >= 0
                ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left`
                : "Order should have arrived"}
            </p>
            <p className="text-xs font-medium text-stone-500">
              Estimated delivery: {formatDate(estimatedDelivery)}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-xl shadow-stone-200/70 sm:p-8">
        <h3 className="text-lg font-extrabold text-stone-950">Order details</h3>
        <ul className="mt-3 divide-y divide-stone-200">
          {cart.map((item) => (
            <OrderItem
              item={item}
              key={item.id}
              isLoadingIngredients={fetcher.state === "loading"}
              ingredients={
                fetcher.data?.find((el) => el.id === item.pizzaId)
                  ?.ingredients ?? []
              }
            />
          ))}
        </ul>
      </div>

      <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-xl shadow-stone-200/70 sm:p-8">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4 text-sm font-semibold text-stone-600">
            <p>Pizza total</p>
            <p>{formatCurrency(orderPrice)}</p>
          </div>
          {priority && (
            <div className="flex items-center justify-between gap-4 text-sm font-semibold text-stone-600">
              <p>Priority</p>
              <p>{formatCurrency(priorityPrice)}</p>
            </div>
          )}
          <div className="flex items-center justify-between gap-4 border-t border-stone-200 pt-4 text-lg font-extrabold text-stone-950">
            <p>To pay on delivery</p>
            <p>{formatCurrency(orderPrice + priorityPrice)}</p>
          </div>
        </div>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderID);
  return order;
}

export default Order;
