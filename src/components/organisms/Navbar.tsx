import React from "react";

import NavLink from "@/components/atoms/NavLink";
import NavLogo from "@/components/atoms/NavLogo";
import LabeledSwitch from "@/components/molecules/LabeledSwitch";
import useDarkmode from "@/hooks/useDarkmode";

function Navbar() {
  const { isDarkmode, updateDarkmode } = useDarkmode();

  return (
    <nav className="sticky top-0 z-10 flex w-full flex-wrap items-center justify-between border-b border-gray-700 bg-gray-800 p-6 dark:bg-gray-800/75 dark:backdrop-blur dark:backdrop-filter">
      <NavLogo />
      <div className="flex flex-grow items-center">
        <div className="flex flex-grow gap-4 text-sm">
          <NavLink link="/algorithm" title="알고리즘" />
          <NavLink link="/data-structure" title="자료구조" />
        </div>
        <LabeledSwitch
          labelValue="다크모드"
          onClick={updateDarkmode}
          defaultChecked={isDarkmode}
        />
      </div>
    </nav>
  );
}

export default Navbar;
