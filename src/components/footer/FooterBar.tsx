import { Feather } from "lucide-react";

const FooterBar: React.FC = () => {
  return (
    <footer className="footer-bar">
      <div className="footer-info">Ln 3, Col 10</div>
      <div className="footer-info">
        <Feather />
        Markdown
      </div>
    </footer>
  );
};

export default FooterBar;
