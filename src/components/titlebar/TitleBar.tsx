import MimirLogo from "./MimirLogo";
import TitleBarMenu from "./TitleBarMenu";
import WindowControls from "./WindowControls";

const TitleBar: React.FC = () => {
    return (
        <header className="titlebar">
            <MimirLogo />
            <TitleBarMenu />
            <div className="titlebar__note-title">
                Ontologies of Archeology
            </div>
            <WindowControls />
        </header>
    );
}

export default TitleBar;