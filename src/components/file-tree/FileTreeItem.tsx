import { ChevronDown, ChevronRight, File } from "lucide-react";

const FileTreeItem: React.FC<{
  name: string;
  children?: React.ReactNode;
  expanded?: boolean;
}> = ({ name, children, expanded = false }) => {
  return (
    <div className="file-tree-item">
      <div className="file-tree-item__card">
        {typeof children !== "undefined" ? (
          expanded ? (
            <ChevronDown className="file-tree-item__chevron-icon" />
          ) : (
            <ChevronRight className="file-tree-item__chevron-icon" />
          )
        ) : (
          <File className="file-tree-item__file-icon" />
        )}
        {name}
      </div>
      {typeof children !== "undefined" && expanded && (
        <div className="file-tree-item__children">{children}</div>
      )}
    </div>
  );
};

export default FileTreeItem;
