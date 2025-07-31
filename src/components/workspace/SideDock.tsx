import { BrainCircuit, Settings } from "lucide-react";

const SideDock: React.FC = () => {
  return (
    <div className="side-dock">
      <button className="concept-notes-button">
        <BrainCircuit className="concept-notes-icon" />
      </button>
      <button className="concept-notes-button">
        <BrainCircuit className="concept-notes-icon" />
      </button>
      <button className="concept-notes-button">
        <BrainCircuit className="concept-notes-icon" />
      </button>
      <button className="concept-notes-button">
        <BrainCircuit className="concept-notes-icon" />
      </button>
      <button className="settings-button">
        <Settings />
      </button>
    </div>
  );
};
