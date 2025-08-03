import MimirLogo from "./MimirLogo";
import TitleBarMenu from "./TitleBarMenu";
import WindowControls from "./WindowControls";
import "./TitleBar.scss";

const TitleBar: React.FC = () => {
  return (
    <header className="titlebar">
      <div className="titlebar__left">
        <MimirLogo />
        <TitleBarMenu />
      </div>
      <div className="titlebar__note-title">Ontologies of Archeology</div>
      <div className="titlebar__right">
        <WindowControls />
      </div>
    </header>
  );
};

export default TitleBar;
