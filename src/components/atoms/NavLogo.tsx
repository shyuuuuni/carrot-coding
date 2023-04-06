import React from "react";

import Link from "next/link";

export default function NavLogo() {
  return (
    <div className="mr-6 flex flex-shrink-0 items-center">
      <Link href="/">
        <p className="text-xl font-bold text-gray-200">당근코딩</p>
      </Link>
    </div>
  );
}
