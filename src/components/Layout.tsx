import React, { PropsWithChildren } from "react";
import Footer from "./Footer";

type Props = PropsWithChildren<object>;

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col">
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
