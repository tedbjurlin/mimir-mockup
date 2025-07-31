import FileTreeItem from "./FileTreeItem";

const LeftFileList: React.FC = () => {
  return (
    <div className="file-tree">
      <FileTreeItem name="Lorem Ipsum" />
      <FileTreeItem name="Foobar" />
      <FileTreeItem name="Fishsticks and Custard" />
      <FileTreeItem name="Ontologies of Archeology" />
    </div>
  );
};

export default LeftFileList;
