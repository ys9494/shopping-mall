import React from "react";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
