import React from "react";

import NavLink from "@/components/atoms/NavLink";
import NavLogo from "@/components/atoms/NavLogo";
import LabeledSwitch from "@/components/molecules/LabeledSwitch";
import useDarkMode from "@/hooks/useDarkMode";

function Navbar() {
  const { isDark, toggleDark } = useDarkMode();

  return (
    <nav className="z-10 flex w-full flex-wrap items-center justify-between border-b border-gray-700 bg-gray-800 p-6">
      <NavLogo />
      <div className="flex flex-grow items-center">
        <div className="flex flex-grow gap-4 text-sm">
          <NavLink link="/algorithm" title="알고리즘" />
          <NavLink link="/data-structure" title="자료구조" />
        </div>
        <LabeledSwitch
          labelValue="다크모드"
          onClick={toggleDark}
          defaultChecked={isDark}
        />
      </div>
    </nav>
  );
}

export default Navbar;
