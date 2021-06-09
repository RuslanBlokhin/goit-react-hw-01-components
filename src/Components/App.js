import React from "react";
import Profile from "./profile/Profile";
import data from "../Data";
import Statistics from "./statistics/Statistics";

const App = () => {
  return (
    <main>
      <Profile user={data.user} />
      <Statistics stats={data.statisticalData} title="Upload stats" />
    </main>
  );
};

export default App;
