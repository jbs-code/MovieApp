import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div className="sm:w-xl md:w-3xl xl:w-7xl mx-auto text-center py-5 px-3">
      <header className="flex mb-4">
        <h1 className="text-5xl font-bold text-info text-shadow-xs text-shadow-black">Movie Buff</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
