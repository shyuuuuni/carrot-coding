import React from "react";

type Props = {
  value: string;
};

export default function Label({ value }: Props) {
  return (
    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
      {value}
    </span>
  );
}
