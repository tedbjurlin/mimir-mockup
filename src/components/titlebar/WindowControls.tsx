import { Maximize2, Minimize2, X } from "lucide-react"

const WindowControls: React.FC = () => {
  return (<div className="window-controls">
    <button className="minimize-button">
      <Minimize2 />
    </button>
    <button className="maximize-button">
      <Maximize2 />
    </button>
    <button className="close-button">
      <X />
    </button>
  </div>)
}

export default WindowControls;