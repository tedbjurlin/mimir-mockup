import { Atom, BookMarked, BrainCircuit } from "lucide-react";
import Tab from "./Tab";

const TabBar: React.FC = () => {
  return (
    <div className="tab-bar">
      <Tab icon={<Atom />} text="Lorem Ipsum" />
      <Tab icon={<Atom />} selected text="Ontologies of Archeology" />
      <Tab icon={<BrainCircuit />} text="Dolor" />
      <Tab icon={<BookMarked />} text="Sit Amet" />
    </div>
  );
};

export default TabBar;
