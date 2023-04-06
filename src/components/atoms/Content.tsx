import React from "react";

type Props = {
  title: string;
} & React.PropsWithChildren;

export default function Content({ title, children }: Props) {
  return (
    <div>
      <div className="text-3xl">{title}</div>
      <div className="mt-2 mb-6 flex-grow border-t border-gray-700" />
      {children}
    </div>
  );
}
