import React from "react";

import Navbar from "@/components/organisms/Navbar";

type Props = React.PropsWithChildren;

export default function Layout({ children }: Props) {
  return (
    <div className="flex h-full flex-col bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-300">
      <Navbar />
      <main className="flex h-full flex-grow-0 flex-col items-center overflow-auto">
        {children}
      </main>
    </div>
  );
}
