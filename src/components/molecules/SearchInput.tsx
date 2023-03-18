import React from "react";

import Input from "@/components/atoms/Input";
import SearchIcon from "@/components/atoms/SearchIcon";

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: () => void;
};

export default function SearchInput({ value, onChange, onSubmit }: Props) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="flex h-12 w-full items-center rounded-md border border-gray-800 bg-inherit p-2 dark:border-gray-200">
      <Input value={value} onChange={onChange} onSubmit={onSubmit} />
      <SearchIcon onClick={onSubmit} />
    </label>
  );
}
