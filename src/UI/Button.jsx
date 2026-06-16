import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "disabled:cursor-not-allowed sm:px-6 inline-block rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 focus:outline-none sm:py-4";

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
