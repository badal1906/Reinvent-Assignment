import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Cards from "../Cards/Cards";
import {
  useGetResourceQuery,
  useGetUsersQuery,
} from "../../Redux/Api/ApiSlice";
import "./dashboard.css";

const Dashboard = () => {
  const { data: userData, isLoading: userDataLoad } = useGetUsersQuery();
  const { data: item, isLoading: itemLoad } = useGetResourceQuery();

  return (
    <div className="app">
      <Sidebar />
      <Cards
        name={"Total User's"}
        data={!userDataLoad && userData.data.length}
        isLoading={userDataLoad}
      />
      <Cards
        name={"Items"}
        data={!itemLoad && item.total}
        isLoading={itemLoad}
      />
    </div>
  );
};

export default Dashboard;
