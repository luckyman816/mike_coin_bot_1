import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="h-[90vh]">
      <Outlet />
    </div>
  );
}
