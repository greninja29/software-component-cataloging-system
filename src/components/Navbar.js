import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="p-4 bg-gray-400">
      <nav>
        <div className="flex justify-between">
          <div className="text-2xl">
            <NavLink to="/home">SCCS</NavLink>
          </div>
          <div className="flex justify-end gap-6" >
            <div>
              <NavLink to="/addcomponent">Add Component</NavLink>
            </div>
            <div>
              <NavLink to="/admin">Admin</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
