import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  const error = useRouteError();

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center px-4">
      <div className="w-full rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-xl shadow-stone-200/70 sm:p-10">
        <p className="mb-3 text-sm font-bold tracking-[0.22em] text-amber-600 uppercase">
          Error
        </p>
        <h1 className="mb-3 text-3xl font-extrabold text-stone-950">
          Something went wrong
        </h1>
        <p className="mb-8 text-sm leading-6 text-stone-600">
          {error.data || error.message}
        </p>

        <LinkButton to={-1}>&larr; Go back</LinkButton>
      </div>
    </div>
  );
}

export default NotFound;
