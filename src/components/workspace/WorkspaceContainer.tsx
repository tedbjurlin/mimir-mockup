const WorkspaceContainer: React.FC = () => {
  return (
    <div className="workspace-container">
      <SideDock />
      <Leaf className="left-workspace-leaf" />
      <WorkspaceBody />
      <Leaf className="right-workspace-leaf" />
    </div>
  );
};

export default WorkspaceContainer;
