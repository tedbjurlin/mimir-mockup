import { Atom, BookMarked, BrainCircuit, Search, Settings } from "lucide-react";

const SideDock: React.FC = () => {
  return (
    <div className="side-dock">
      <button className="thought-notes-button">
        <BrainCircuit className="thought-notes-icon" />
      </button>
      <button className="concept-notes-button">
        <Atom className="concept-notes-icon" />
      </button>
      <button className="reference-notes-button">
        <BookMarked className="reference-notes-icon" />
      </button>
      <button className="search-button">
        <Search className="search-icon" />
      </button>
      <button className="settings-button">
        <Settings />
      </button>
    </div>
  );
};

export default SideDock;
