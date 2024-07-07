import React, { useRef, RefObject } from "react";
import { Outlet } from "react-router-dom";
export default function Layout() {
  const mainScreenRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length === 2) {
      event.preventDefault();
    }
  };
  return (
    <div
      ref={mainScreenRef}
      onTouchMove={handleTouchMove}
      style={{
        width: "100%",
        height: "100%",
        touchAction: "none",
      }}
    >
      <Outlet />
    </div>
  );
}
