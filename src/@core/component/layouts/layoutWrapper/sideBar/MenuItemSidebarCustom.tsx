import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
  menuCollapsed: boolean;
  menuHover: boolean;
  icon: ReactNode;
  text: string;
  url: string;
}

const MenuItemSidebarCustom = ({
  menuCollapsed,
  menuHover,
  icon,
  text,
  url,
}: Props) => {
  return (
    <MenuItem component={<Link to={url} />}>
      {icon}
      {(menuHover || !menuCollapsed) && (
        <span
          className="font-medium-1"
          style={{
            marginLeft: "10px",
          }}
        >
          {text}
        </span>
      )}
    </MenuItem>
  );
};

export default MenuItemSidebarCustom;
