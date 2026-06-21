function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/20 backdrop-blur-sm">
      <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-2xl shadow-stone-950/15">
        <div className="loader"></div>
      </div>
    </div>
  );
}

export default Loader;
