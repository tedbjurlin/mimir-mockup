import { Atom, BookMarked, BrainCircuit, Search, Settings } from "lucide-react";
import "./SideDock.scss";

const SideDock: React.FC = () => {
  return (
    <div className="side-dock">
      <div className="side-dock__section">
        <button className="side-dock__thought-notes-button side-dock__button side-dock__button--selected">
          <BrainCircuit className="side-dock__thought-notes-icon side-dock__button-icon" />
        </button>
        <button className="side-dock__concept-notes-button side-dock__button">
          <Atom className="side-dock__concept-notes-icon side-dock__button-icon" />
        </button>
        <button className="side-dock__reference-notes-button side-dock__button">
          <BookMarked className="side-dock__reference-notes-icon side-dock__button-icon" />
        </button>
      </div>
      <div className="side-dock__section">
        <button className="side-dock__search-button side-dock__button">
          <Search className="side-dock__search-icon side-dock__button-icon" />
        </button>
        <button className="side-dock__settings-button side-dock__button">
          <Settings className="side-dock__settings-icon side-dock__button-icon" />
        </button>
      </div>
    </div>
  );
};

export default SideDock;
