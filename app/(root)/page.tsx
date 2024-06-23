import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotlaBalanceBox from "@/components/TotlaBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Adrian",
    lastName: "JSM",
    email: "contact@jsmastery.pro",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotlaBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[
          {
            currentBalance: 123.5,
          },
          {
            currentBalance: 123.5,
          },
        ]}
      />
    </section>
  );
};

export default Home;
