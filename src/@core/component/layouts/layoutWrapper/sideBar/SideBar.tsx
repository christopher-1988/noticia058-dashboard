import { useState, useEffect } from "react";
import { Sidebar, Menu } from "react-pro-sidebar";
import classnames from "classnames";
import { Menu as MenuFeather } from "react-feather";
import themeConfig from "@src/config/theme.config";
import layoutGrid from "../../../../../assets/sidebar/layout-grid.svg";
import users from "../../../../../assets/sidebar/users.svg";
import listCheck from "../../../../../assets/sidebar/list-check.svg";
import reportSearch from "../../../../../assets/sidebar/report-search.svg";
import speakerphone from "../../../../../assets/sidebar/speakerphone.svg";
import moneyReport from "../../../../../assets/sidebar/money-report.svg";
import brand from "../../../../../assets/sidebar/brand.svg";
import shape from "../../../../../assets/sidebar/shape.svg";
import point from "../../../../../assets/sidebar/point.svg";

import MenuItemSidebar from "./MenuItemSidebar";

interface Props {
  skin: string;
  menuVisibility?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setMenuVisibility?: any;
  menuCollapsed: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setMenuCollapsed?: any;
}

const WrapperSideBar = ({ menuCollapsed, skin, setMenuCollapsed }: Props) => {
  //States
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [menuHover, setMenuHover] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  const onMouseEnter = () => {
    setMenuHover(true);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div
        className={classnames(
          "main-menu menu-fixed menu-accordion menu-shadow",
          {
            expanded: menuHover || menuCollapsed === false,
            "menu-light": skin !== "semi-dark" && skin !== "dark",
            "menu-dark": skin === "semi-dark" || skin === "dark",
          }
        )}
        style={{ zIndex: 1000 }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => setMenuHover(false)}
      >
        <Sidebar>
          <Menu>
            <div className="d-flex justify-content-between p-2">
              {/*menuCollapsed ? (
                <img
                  src={themeConfig.app.appLogoCollapsed}
                  alt="logo"
                  style={{ height: "35px" }}
                />
              ) : (
                <img src={themeConfig.app.appName} alt="logo" />
              )*/}
              <MenuFeather
                onClick={() => setMenuCollapsed(!menuCollapsed)}
                className="ficon"
                size={20}
              />
            </div>

            {/* biniwallet  */}
            <span
              className={` menu-title-divider ${
                menuHover || !menuCollapsed ? "margin-small-2" : "margin-small"
              } `}
            >
              Menú
            </span>
            {/* pacientes  */}
            <MenuItemSidebar
              icon={users}
              menuCollapsed={menuCollapsed}
              menuHover={menuHover}
              text="Notificaciones"
              url="bieni-wallet/pacientes"
            />
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};

export default WrapperSideBar;
