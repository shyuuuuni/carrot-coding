import React from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function SearchIcon({ onClick }: Props) {
  return (
    <button
      type="button"
      className="focus:outline-none h-full rounded-lg px-2 hover:bg-gray-300 dark:hover:bg-gray-700"
      onClick={onClick}
    >
      <MagnifyingGlassIcon className="h-6 w-6" />
    </button>
  );
}
