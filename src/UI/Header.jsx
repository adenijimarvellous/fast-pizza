import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="border-b border-stone-400 bg-yellow-500 p-4 uppercase">
      <Link to="/" className="tracking-widest">
        Fast Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
export default Header;
