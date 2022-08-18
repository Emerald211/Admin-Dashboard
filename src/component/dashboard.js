import React from "react";

function Dashboard() {
  return (
    <div className="flex flex-col dashboard overflow-scroll ">
      <div className="grid lg:grid-cols-2 gap-2">
        <div className=" bg-white rounded-xl p-6 h-64">
          <h1 className="text-3xl font-bold ">Overview</h1>
        </div>
        <div className="grid lg:grid-row-2 grid-cols-2 gap-2">
          <div className=" bg-white rounded-xl p-6 h-64">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            aut!
          </div>
          <div className=" bg-white rounded-xl p-6 h-64">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            aut!
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
