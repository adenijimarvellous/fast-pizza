import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-flex items-center justify-center rounded-xl text-sm font-bold tracking-wide uppercase transition-all duration-200 focus:ring-4 focus:ring-amber-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60";

  const styles = {
    primary:
      base +
      " bg-amber-400 px-5 py-3 text-stone-950 shadow-lg shadow-amber-500/20 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-500/25 sm:px-6 sm:py-4",
    small:
      base +
      " bg-amber-400 px-3.5 py-2 text-xs text-stone-950 shadow-sm shadow-amber-500/20 hover:bg-amber-300 md:px-4 md:py-2.5",

    secondary:
      base +
      " border border-stone-300 bg-white px-5 py-3 text-stone-800 shadow-sm shadow-stone-200/70 hover:border-stone-400 hover:bg-stone-100 sm:px-6 sm:py-4",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
