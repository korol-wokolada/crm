import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../pages/routeConstants";

export default function Sidebar() {
  const [isSettingCollapsed, setIsSettingCollapsed] = useState(false);

  return (
    <div className="navigation-wrapper">
      <nav className="navigation">
        <div className="navigation-name">Меню</div>

        <ul className="navigation-list">
          <NavLink
            className="navigation-list-item-link"
            to={APP_ROUTES.mainPage}>
            <li className="navigation-list-item">
              <div className="navigation-list-item-icon main"></div>
              <p className="navigation-list-item-name">Главная</p>
            </li>
          </NavLink>

          <NavLink
            className="navigation-list-item-link"
            to={APP_ROUTES.adressPage}>
            <li className="navigation-list-item">
              <div className="navigation-list-item-icon search"></div>
              <p className="navigation-list-item-name">Поиск адресов</p>
            </li>
          </NavLink>

          <NavLink
            className="navigation-list-item-link"
            to={APP_ROUTES.tablesPage}>
            <li className="navigation-list-item">
              <div className="navigation-list-item-icon tables"></div>
              <p className="navigation-list-item-name">Таблицы</p>
            </li>
          </NavLink>

          <NavLink
            className="navigation-list-item-link"
            to={APP_ROUTES.calendarPage}>
            <li className="navigation-list-item">
              <div className="navigation-list-item-icon calendar"></div>
              <p className="navigation-list-item-name">Календарь</p>
            </li>
          </NavLink>

          <NavLink
            className="navigation-list-item-link"
            to={APP_ROUTES.mapPage}>
            <li className="navigation-list-item">
              <div className="navigation-list-item-icon map"></div>
              <p className="navigation-list-item-name">Карты</p>
            </li>
          </NavLink>

          <NavLink
            className="navigation-list-item-link"
            to={APP_ROUTES.widgetsPage}>
            <li className="navigation-list-item">
              <div className="navigation-list-item-icon widgets"></div>
              <p className="navigation-list-item-name">Виджеты</p>
            </li>
          </NavLink>

          <li className="navigation-list-item settings">
            <div
              className="navigation-settings-block"
              onClick={() => setIsSettingCollapsed((prev) => !prev)}>
              <div className="navigation-list-item-icon settings"></div>

              <p className="navigation-list-item-name">Настройки</p>

              <div
                className={
                  isSettingCollapsed
                    ? "setting-icon-open"
                    : "setting-icon-close"
                }></div>
            </div>

            {isSettingCollapsed && (
              <div className="navigation-setting-items">
                <NavLink
                  className="navigation-list-item-link"
                  to={APP_ROUTES.profileSettings}>
                  <div className="navigation-list-item">
                    <div className="navigation-list-item-icon profileSettings"></div>

                    <p className="navigation-list-item-name">
                      Настройки профиля
                    </p>
                  </div>
                </NavLink>

                <NavLink
                  className="navigation-list-item-link"
                  to={APP_ROUTES.financialManagement}>
                  <div className="navigation-list-item">
                    <div className="navigation-list-item-icon financialManagement"></div>

                    <p className="navigation-list-item-name">
                      Управление финансами
                    </p>
                  </div>
                </NavLink>
              </div>
            )}
          </li>

          <li className="navigation-list-item" onClick={() => alert("Exit")}>
            <div className="navigation-list-item-icon exit"></div>

            <p className="navigation-list-item-name">Выход</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}
