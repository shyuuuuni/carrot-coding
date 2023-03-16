import React from "react";

import Navbar from "@/components/organisms/Navbar";

type Props = React.PropsWithChildren;

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
