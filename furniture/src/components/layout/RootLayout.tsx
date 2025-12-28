import { Outlet } from "react-router";

function RootLayout() {
  return (
    <>
      <div className="bg-sky-300">Navigation Menu</div>
      <Outlet />
      <div className="bg-sky-300">Footer Menu</div>
    </>
  );
}

export default RootLayout;
