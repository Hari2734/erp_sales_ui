import React from "react";
import "../styles/Sidebar.css"; // or your custom CSS

export default function HeaderNav() {
  return (
    <div className="header-nav">
      <ul className="menu-bar">
        <li><i className="fas fa-cogs"></i> 管理作業</li>
        <li><i className="fas fa-file-alt"></i> 基本資料</li>
        <li><i className="fas fa-book"></i> 會計總帳</li>
        <li><i className="fas fa-clipboard-list"></i> 報表作業</li>
        <li><i className="fas fa-search"></i> 系統設定</li>
        <li><i className="fas fa-user"></i> 使用者</li>
      </ul>
    </div>
  );
}
