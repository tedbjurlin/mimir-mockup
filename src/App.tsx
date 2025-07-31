import "./App.css";
import FooterBar from "./components/footer/FooterBar";
import TitleBar from "./components/titlebar/TitleBar";
import WorkspaceContainer from "./components/workspace/WorkspaceContainer";

const App: React.FC = () => {
  return (
    <main className="app-root">
      <TitleBar />
      <WorkspaceContainer />
      <FooterBar />
    </main>
  );
};

export default App;
