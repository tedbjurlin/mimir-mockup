import "./Leaf.scss";

const Leaf: React.FC<{ className: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <div className={`workspace-leaf ${className}`}>{children}</div>;
};

export default Leaf;
