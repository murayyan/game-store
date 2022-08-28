import React from "react";
import SideBar from "../../../components/organisms/SideBar";
import TransactionsContent from "../../../components/organisms/TransactionsContent";

export default function Transactions() {
  return (
    <>
      <SideBar activeMenu="transactions" />
      <TransactionsContent />
    </>
  );
}
