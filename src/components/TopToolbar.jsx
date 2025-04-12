import React from "react";
import "../styles/TopToolbar.css";
import HeaderNav from "./HeaderNav";
import Msystem from "../assets/images/msystem.png";
import Package from "../assets/images/package.png";
import Ledger from "../assets/images/ledger.png";
import Callerid from "../assets/images/callerid.png";
import Notification from "../assets/images/notification.png";
import Customers from "../assets/images/customers.png";

export default function TopToolbar() {
  return (
    <>
      <div className="top-toolbar">
        <HeaderNav />
      </div>
      <div className="header-btns">
        <button><img src={Msystem} alt="管理系統" />管理系統</button>
        <button><img src={Package} alt="分裝作業" />分裝作業</button>
        <button><img src={Ledger} alt="會計總帳" />會計總帳</button>
        <button><img src={Callerid} alt="來電顯示" />來電顯示</button>
        <button><img src={Notification} alt="訊息通知" />訊息通知</button>
        <button><img src={Customers} alt="使用者" />使用者</button>
      </div>
    </>
  );
}