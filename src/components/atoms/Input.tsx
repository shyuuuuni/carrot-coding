import React, { useCallback } from "react";

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: () => void;
};

export default function Input({ value, onChange, onSubmit }: Props) {
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        if (e.key === "Enter") {
          onSubmit();
        }
      },
      [onSubmit]
    );

  return (
    <input
      className="h-full flex-grow appearance-none bg-inherit focus:outline-none"
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      type="text"
      autoComplete="off"
      placeholder="검색"
    />
  );
}
