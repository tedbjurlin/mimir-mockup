import LeftFileList from "../file-tree/LeftFileList";
import RightFileTree from "../file-tree/RightFileTree";
import Leaf from "./Leaf";
import SideDock from "./SideDock";
import WorkspaceBody from "./WorkspaceBody";

const WorkspaceContainer: React.FC = () => {
  return (
    <div className="workspace-container">
      <SideDock />
      <Leaf className="left-workspace-leaf">
        <LeftFileList />
      </Leaf>
      <WorkspaceBody />
      <Leaf className="right-workspace-leaf">
        <RightFileTree />
      </Leaf>
    </div>
  );
};

export default WorkspaceContainer;
