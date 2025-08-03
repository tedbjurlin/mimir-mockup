import { Atom, BookMarked, BrainCircuit } from "lucide-react";
import Tab from "./Tab";
import "./TabBar.scss";

const TabBar: React.FC = () => {
  return (
    <div className="tab-bar">
      <Tab icon={<Atom className="tab__icon" />} text="Lorem Ipsum" />
      <Tab
        icon={<Atom className="tab__icon" />}
        selected
        text="Ontologies of Archeology"
      />
      <Tab icon={<BrainCircuit className="tab__icon" />} text="Dolor" />
      <Tab icon={<BookMarked className="tab__icon" />} text="Sit Amet" />
      <div className="tab-bar__spacer" />
    </div>
  );
};

export default TabBar;
