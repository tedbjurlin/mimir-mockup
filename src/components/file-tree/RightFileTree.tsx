import FileTreeItem from "./FileTreeItem";

const RightFileTree: React.FC = () => {
  return (
    <div className="file-tree">
      <FileTreeItem name="Lorem Ipsum" />
      <FileTreeItem name="Foobar">
        <FileTreeItem name="hidden" />
      </FileTreeItem>
      <FileTreeItem expanded name="Fishsticks and Custard">
        <FileTreeItem name="Fishsticks" />
        <FileTreeItem name="Custard" />
      </FileTreeItem>
      <FileTreeItem name="Ontologies of Archeology" />
    </div>
  );
};

export default RightFileTree;
