import { useEffect } from "react";
import "./App.scss";
import FooterBar from "./components/footer/FooterBar";
import TitleBar from "./components/titlebar/TitleBar";
import WorkspaceContainer from "./components/workspace/WorkspaceContainer";

const App: React.FC = () => {
  useEffect(() => {
    document.body.setAttribute("data-theme", "light");
  });

  return (
    <>
      <TitleBar />
      <WorkspaceContainer />
      <FooterBar />
    </>
  );
};

export default App;
