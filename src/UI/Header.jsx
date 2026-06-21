import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/85 px-4 py-3 shadow-sm shadow-stone-200/60 backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <Link
          to="/"
          className="rounded-xl text-sm font-extrabold tracking-[0.18em] text-stone-950 uppercase transition-colors hover:text-amber-700 focus:ring-4 focus:ring-amber-200 focus:outline-none"
        >
          Fast Pizza Co.
        </Link>
        <SearchOrder />
        <Username />
      </div>
    </header>
  );
}
export default Header;
