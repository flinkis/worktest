import "../../styles/layout.scss";

import Header from "./Header";
import Footer from "./Footer";
import ErrorDisplay from "../common/ErrorDisplay";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="layout">
    <Header />
    <ErrorDisplay />
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
    <main className="main-content">{children}</main>
    <Footer />
  </div>
);

export default Layout;
