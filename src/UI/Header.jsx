import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">Fast Pizza Co.</Link>
      <p>Order your pizza in seconds!</p>
    </header>
  );
};
