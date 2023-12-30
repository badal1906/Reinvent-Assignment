import React, { useState } from "react";
import "./Sidebar.css";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../Redux/Users/UsersSlice";
import { useAuthenicationMutation } from "../../Redux/Api/ApiSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("Dashboard");
  const [ManageLogout] = useAuthenicationMutation();
  const user = useSelector(selectUser);

  const handleColor = (e) => {
    setSelected(e.target.textContent);
  };

  const handleLogout = async () => {
    await ManageLogout({
      url: "logout",
    });
    dispatch(logout());
  };

  return (
    <div className="sidebar__container">
      <div className="sidebar__container__logo">
        <RxAvatar size={"100px"} />
        <p>Welcome {user}</p>
      </div>

      <div className="sidebar__container__list" onClick={handleColor}>
        <div
          className={`sidebar__list__items ${
            selected === "Dashboard" ? "selected" : ""
          }`}
        >
          <MdOutlineSpaceDashboard size={"40px"} />
          <div>Dashboard</div>
        </div>
        <div
          className={`sidebar__list__items ${
            selected === "Home" ? "selected" : ""
          }`}
        >
          <IoHomeOutline size={"40px"} />
          <div>Home</div>
        </div>
        <div
          className={`sidebar__list__items ${
            selected === "Logout" ? "selected" : ""
          }`}
          onClick={handleLogout}
        >
          <MdLogout size={"40px"} />
          <div>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
