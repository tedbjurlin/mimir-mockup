import { X } from "lucide-react";
import "./Tab.scss";

const Tab: React.FC<{
  icon: React.ReactNode;
  text: string;
  selected?: boolean;
}> = ({ icon, text, selected = false }) => {
  return (
    <div className={`tab ${selected ? "tab--selected" : ""}`}>
      {icon}
      <div className="tab__title">{text}</div>
      <button className="tab__close-button">
        <X className="tab__close-icon" />
      </button>
    </div>
  );
};

export default Tab;
