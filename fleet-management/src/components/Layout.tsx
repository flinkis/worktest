import { Container } from "@mui/material";
import HeaderBar from "./HeaderBar";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderBar />
      <Container style={{ marginTop: "2rem" }}>{children}</Container>
    </>
  );
};

export default Layout;
