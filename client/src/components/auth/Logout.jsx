import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions";
import { NavLink } from "reactstrap";

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <NavLink onClick={() => dispatch(logout())} href="#">
        Logout
      </NavLink>
    </div>
  );
};

export default Logout;
