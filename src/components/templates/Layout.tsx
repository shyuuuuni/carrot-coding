import React from "react";

import Navbar from "@/components/organisms/Navbar";

type Props = React.PropsWithChildren;

export default function Layout({ children }: Props) {
  return (
    <div className="h-full scrollbar-hide">
      <Navbar />
      <main className="bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-300">
        {children}
      </main>
    </div>
  );
}
