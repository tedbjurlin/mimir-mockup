import TabBar from "../tabs/TabBar";
import TabContainer from "../tabs/TabContainer";
import "./WorkspaceBody.scss";

const WorkspaceBody: React.FC = () => {
  return (
    <div className="workspace-body">
      <TabBar />
      <TabContainer />
    </div>
  );
};

export default WorkspaceBody;
