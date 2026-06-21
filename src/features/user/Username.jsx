import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) {
    return null;
  }

  return (
    <div className="hidden rounded-full bg-stone-100 px-3 py-1.5 text-sm font-bold text-stone-700 md:block">
      {username}
    </div>
  );
}

export default Username;
