import { Feather } from "lucide-react";
import "./FooterBar.scss";

const FooterBar: React.FC = () => {
  return (
    <footer className="footer-bar">
      <div className="footer-bar__info">Ln 3, Col 10</div>
      <div className="footer-bar__info">
        <Feather className="footer-bar__info-icon" />
        Markdown
      </div>
    </footer>
  );
};

export default FooterBar;
