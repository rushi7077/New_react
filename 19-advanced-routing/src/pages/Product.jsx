import React from "react";
import { Link, Outlet } from "react-router-dom";

function Product() {
  return (
    <div className="p-10 ml-10 mt-20">
      <div className="text-3xl font-bold flex gap-20 mb-10">
        <Link to="men">Men</Link>
        <Link to="women">Women</Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Product;
