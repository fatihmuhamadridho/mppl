import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@components/core/navbar"));
const Footer = dynamic(() => import("@components/core/footer"))

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
