import React from "react";

type Props = {
  key: React.Key;
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function DropDownItem({ key, label, onClick }: Props) {
  return (
    <button
      type="button"
      className="cursor-pointer px-3 py-2 hover:bg-gray-100"
      key={key}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
