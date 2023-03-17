import Link from "next/link";
import React from "react";

export default function NavLogo() {
  return (
    <div className="mr-6 flex flex-shrink-0 items-center text-white">
      <Link href="/">
        <p className="text-xl font-bold text-white">당근코딩</p>
      </Link>
    </div>
  );
}
