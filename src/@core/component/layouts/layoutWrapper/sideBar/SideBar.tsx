import { useState, useEffect } from "react";
import { Sidebar, Menu } from "react-pro-sidebar";
import classnames from "classnames";
import { Menu as MenuFeather } from "react-feather";
//import themeConfig from "@src/config/theme.config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
//Assets
import users from "@src/assets/sidebar/users.svg";
//Component
import MenuItemSidebar from "./MenuItemSidebar";
import MenuItemSidebarCustom from "./MenuItemSidebarCustom";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
//Context
import useAuth from "@src/@core/hooks/useAuth";

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
  const { session } = useAuth();
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
  //Validar si el usuario es administrador
  const isAdmin = session?.role === 1 ? true : false;
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
            {/*Notificaciones*/}
            <MenuItemSidebarCustom
              menuCollapsed={menuCollapsed}
              menuHover={menuHover}
              icon={<FontAwesomeIcon icon={faEnvelope} size="lg" />}
              text="Notificaciones"
              url="/notificaciones"
            />
            {isAdmin ? (
              <MenuItemSidebarCustom
                menuCollapsed={menuCollapsed}
                menuHover={menuHover}
                icon={<FontAwesomeIcon icon={faCodeBranch} size="lg" />}
                text="Control versiones"
                url="/control-versiones"
              />
            ) : null}
            {isAdmin ? (
              <MenuItemSidebar
                icon={users}
                menuCollapsed={menuCollapsed}
                menuHover={menuHover}
                text="Usuarios"
                url="/usuarios"
              />
            ) : null}
            {/* */}
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};

export default WrapperSideBar;
