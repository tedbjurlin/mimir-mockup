import TabBar from "../tabs/TabBar";
import TabContainer from "../tabs/TabContainer";

const WorkspaceBody: React.FC = () => {
  return (
    <div className="workspace-body">
      <TabBar />
      <TabContainer />
    </div>
  );
};

export default WorkspaceBody;
