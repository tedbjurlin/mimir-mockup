import { X } from "lucide-react";

const Tab: React.FC<{
  icon: React.ReactNode;
  text: string;
  selected?: boolean;
}> = ({ icon, text, selected = false }) => {
  return (
    <div className={`tab ${selected ? "tab--selected" : ""}`}>
      {icon}
      {text}
      <button className="tab-close-button">
        <X className="tab-close-icon" />
      </button>
    </div>
  );
};

export default Tab;
