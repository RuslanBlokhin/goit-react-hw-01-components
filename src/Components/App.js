import React from "react";
import Profile from "./profile/Profile";
import data from "../Data";
import Statistics from "./statistics/Statistics";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transactionHistory/TransactionHistory";

const App = () => {
  return (
    <main>
      <Profile user={data.user} />
      <Statistics stats={data.statisticalData} title="Upload stats" />
      <FriendList friends={data.friends} />
      <TransactionHistory items={data.transactions} />
    </main>
  );
};

export default App;
