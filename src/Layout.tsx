import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className=" max-w-sm: w-[390]">
      <Outlet />
    </div>
  );
}
