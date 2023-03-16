import React from "react";

import NavLink from "@/components/atoms/NavLink";
import NavLogo from "@/components/atoms/NavLogo";
import LabeledSwitch from "@/components/molecules/LabeledSwitch";

function Navbar() {
  const darkmodeHandler = (isDarkmode: boolean) => {
    console.log(isDarkmode);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-gray-800 p-6">
      <NavLogo />
      <div className="flex flex-grow items-center">
        <div className="flex flex-grow gap-4 text-sm">
          <NavLink link="/algorithm" title="알고리즘" />
          <NavLink link="/data-structure" title="자료구조" />
        </div>
        <LabeledSwitch labelValue="다크모드" onClick={darkmodeHandler} />
      </div>
    </nav>
  );
}

export default Navbar;
