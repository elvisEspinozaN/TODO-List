import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span>TODO-List</span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/addtask">
                New Task
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/addtask">
                More
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
