import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Outlet />
      <h2>Layout</h2>
    </div>
  );
};

export default Layout;
