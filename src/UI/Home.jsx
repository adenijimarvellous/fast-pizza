import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <section
      className="relative isolate -mx-4 overflow-hidden rounded-3xl bg-stone-950 px-6 py-16 text-center shadow-2xl shadow-stone-300/60 sm:-mx-6 sm:px-10 sm:py-24 lg:-mx-8"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(28,25,23,0.88), rgba(28,25,23,0.5)), url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1800&q=85')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-xs font-bold tracking-[0.28em] text-amber-300 uppercase">
          Fast Pizza Co.
        </p>
        <h1 className="mb-5 text-4xl leading-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          The Best Pizza.
          <br />
          <span className="[font-family:'Playfair_Display',serif] text-amber-300">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-base leading-7 text-stone-200 sm:text-lg">
          Hot, crisp, and built for quick ordering from menu to checkout.
        </p>

        <div className="mx-auto max-w-md rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl shadow-stone-950/20 backdrop-blur-md">
          {username === "" ? (
            <CreateUser />
          ) : (
            <Button to="/menu" type="primary">
              Continue Ordering, {username}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;
