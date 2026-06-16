import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "disabled:cursor-not-allowed sm:px-6 inline-block rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 focus:outline-none sm:py-4";

  const styles = {
    primary: base + "px-4 py-3 sm:px-6 sm:py-4",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "disabled:cursor-not-allowed sm:px-6 inline-block rounded-lg bg-transparent border-2 border-stone-300 px-4 py-2 text-sm font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:ring-stone-2 focus:outline-none sm:py-4",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
