import React, { useState } from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isSettingOpen, setIsSettingOpen] = useState<boolean>(false);

  return (
    <div className="Navigation-wrapper">
      <nav className="Navigation">
        <div className="Navigation-name">Меню</div>
        <ul className="Navigation-list">
          <NavLink className="Navigation-list-item-link" to={"/"}>
            <li className="Navigation-list-item">
              <div className="Navigation-list-item-icon main"></div>
              <p className="Navigation-list-item-name">Главная</p>
            </li>
          </NavLink>
          <NavLink className="Navigation-list-item-link" to={"/adress"}>
            <li className="Navigation-list-item">
              <div className="Navigation-list-item-icon search"></div>
              <p className="Navigation-list-item-name">Поиск адресов</p>
            </li>
          </NavLink>
          <NavLink className="Navigation-list-item-link" to={"/tables"}>
            <li className="Navigation-list-item">
              <div className="Navigation-list-item-icon tables"></div>
              <p className="Navigation-list-item-name">Таблицы</p>
            </li>
          </NavLink>
          <NavLink className="Navigation-list-item-link" to={"/calendar"}>
            <li className="Navigation-list-item">
              <div className="Navigation-list-item-icon calendar"></div>
              <p className="Navigation-list-item-name">Календарь</p>
            </li>
          </NavLink>
          <NavLink className="Navigation-list-item-link" to={"/map"}>
            <li className="Navigation-list-item">
              <div className="Navigation-list-item-icon map"></div>
              <p className="Navigation-list-item-name">Карты</p>
            </li>
          </NavLink>
          <NavLink className="Navigation-list-item-link" to={"/widgets"}>
            <li className="Navigation-list-item">
              <div className="Navigation-list-item-icon widgets"></div>
              <p className="Navigation-list-item-name">Виджеты</p>
            </li>
          </NavLink>

          <li className="Navigation-list-item settings">
            <div
              className="Navigation-settings-block"
              onClick={() => setIsSettingOpen((prev) => !prev)}>
              <div className="Navigation-list-item-icon settings"></div>
              <p className="Navigation-list-item-name">Настройки</p>
              <div
                className={
                  isSettingOpen ? "setting-icon-open" : "setting-icon-close"
                }></div>
            </div>

            {isSettingOpen && (
              <div className="Navigation-setting-items">
                <NavLink
                  className="Navigation-list-item-link"
                  to={"/profileSettings"}>
                  <div className="Navigation-list-item">
                    <div className="Navigation-list-item-icon profileSettings"></div>
                    <p className="Navigation-list-item-name">
                      Настройки профиля
                    </p>
                  </div>
                </NavLink>
                <NavLink
                  className="Navigation-list-item-link"
                  to={"/inancialManagement"}>
                  <div className="Navigation-list-item">
                    <div className="Navigation-list-item-icon financialManagement"></div>
                    <p className="Navigation-list-item-name">
                      Управление финансами
                    </p>
                  </div>
                </NavLink>
              </div>
            )}
          </li>

          <li className="Navigation-list-item" onClick={() => alert("Exit")}>
            <div className="Navigation-list-item-icon exit"></div>
            <p className="Navigation-list-item-name">Выход</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}
