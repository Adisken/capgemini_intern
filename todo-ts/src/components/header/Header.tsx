import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../../context";
import { TodoActions } from "../../store/actions";
import "./style.css";

const Header = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <div className="header">
      <NavLink className={"menu"} to="/">
        dashboard
      </NavLink>
      <NavLink className={"menu"} to="/todo">
        Todos
      </NavLink>
      <NavLink className={"menu"} to="/catpic">
        cat picture
      </NavLink>
      <button
        onClick={() =>
          dispatch(
            state.role === "admin"
              ? { type: "change-role", payload: "user" }
              : { type: "change-role", payload: "admin" }
          )
        }
      >
        {state.role === "admin" ? "Admin mode" : "User mode"}
      </button>
    </div>
  );
};

export default Header;
export {};
