import { Menu } from "lucide-react";
import "./TitleBarMenu.scss";

const TitleBarMenu: React.FC = () => {
  return (
    <button className="titlebar-menu-button title-bar-button">
      <Menu className="titlebar-menu-button__icon title-bar-button__icon" />
    </button>
  );
};

export default TitleBarMenu;
