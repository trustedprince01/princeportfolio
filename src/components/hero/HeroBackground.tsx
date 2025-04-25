
export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
      <div className="grid grid-cols-12 grid-rows-12 gap-8 h-full w-full opacity-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="col-span-1 row-span-1 border-t border-l border-white/10"></div>
        ))}
      </div>
    </div>
  );
};
