import { Maximize2, Minimize2, X } from "lucide-react";
import "./WindowControls.scss";

const WindowControls: React.FC = () => {
  return (
    <div className="window-controls">
      <button className="window-controls__minimize-button title-bar-button">
        <Minimize2 className="window-controls__minimize-icon title-bar-button__icon" />
      </button>
      <button className="window-controls__maximize-button title-bar-button">
        <Maximize2 className="window-controls__maximize-icon title-bar-button__icon" />
      </button>
      <button className="window-controls__close-button title-bar-button">
        <X className="window-controls__close-icon title-bar-button__icon" />
      </button>
    </div>
  );
};

export default WindowControls;
