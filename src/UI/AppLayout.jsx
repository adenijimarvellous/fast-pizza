import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import { Header } from "./Header";

export const AppLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <p>
          Welcome to Fast Pizza Co.! We offer a variety of delicious pizzas that
          you can order online. Browse our menu, add your favorite pizzas to the
          cart, and place your order in just a few clicks!
        </p>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
};
