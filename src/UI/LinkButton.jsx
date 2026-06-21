import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    "inline-flex items-center rounded-lg text-sm font-semibold text-amber-700 transition-colors hover:text-amber-900 focus:ring-4 focus:ring-amber-200 focus:outline-none";

  if (to === -1) {
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
