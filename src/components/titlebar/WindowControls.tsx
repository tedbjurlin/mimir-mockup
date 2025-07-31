import { Maximize2, Minimize2, X } from "lucide-react";

const WindowControls: React.FC = () => {
  return (
    <div className="window-controls">
      <button className="minimize-button">
        <Minimize2 className="minimize-icon" />
      </button>
      <button className="maximize-button">
        <Maximize2 className="maximize-icon" />
      </button>
      <button className="window-close-button">
        <X className="window-close-icon" />
      </button>
    </div>
  );
};

export default WindowControls;
