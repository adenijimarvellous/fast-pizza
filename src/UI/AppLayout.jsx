import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}

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
}

export default AppLayout;
