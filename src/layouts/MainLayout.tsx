import { Outlet, useNavigate } from "react-router";

export const MainLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:w-xl md:w-3xl xl:w-7xl mx-auto text-center py-5 px-3">
      <header className="flex mb-4">
        <h1 onClick={()=>navigate('/')} className="cursor-pointer text-5xl font-bold text-info text-shadow-xs text-shadow-black">Movie Buff</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
