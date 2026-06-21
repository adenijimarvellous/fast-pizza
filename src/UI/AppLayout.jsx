import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-[radial-gradient(circle_at_top_left,_#fef3c7_0,_transparent_30rem),linear-gradient(180deg,_#fff7ed_0%,_#fafaf9_34%,_#f5f5f4_100%)]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-y-auto">
        <main className="mx-auto w-full max-w-6xl px-4 pt-6 pb-28 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
