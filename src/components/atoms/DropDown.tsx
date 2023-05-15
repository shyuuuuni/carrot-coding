import React, { useState } from "react";

type Props = {
  defaultLabel: string;
  selectedItem?: string;
} & React.PropsWithChildren;

export default function DropDown({
  defaultLabel,
  selectedItem,
  children,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpen((state: boolean) => !state);
  };

  const handleCloseDropdown: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="focus:outline-none rounded-md bg-gray-300 py-2 px-4 text-gray-700 shadow-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
      >
        {selectedItem ?? defaultLabel}
      </button>
      {isOpen && (
        <div
          onClick={handleCloseDropdown}
          className="focus:outline-none absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm"
        >
          {children}
        </div>
      )}
    </div>
  );
}
