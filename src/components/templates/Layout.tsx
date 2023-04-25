import React from "react";

import Navbar from "@/components/organisms/Navbar";

type Props = React.PropsWithChildren;

export default function Layout({ children }: Props) {
  return (
    <div className="flex h-full flex-col">
      <Navbar />
      <main className="flex flex-grow-0 flex-col items-center overflow-auto bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-300">
        {children}
      </main>
    </div>
  );
}
