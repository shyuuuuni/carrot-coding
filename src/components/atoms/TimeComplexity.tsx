import React from "react";

type Props = {
  complexity: { [key: string]: string };
};

export default function TimeComplexity({ complexity }: Props) {
  const rows = Object.entries(complexity);

  return (
    <ol className="text-xl">
      {rows.map(([method, complex]) => (
        <li key={method}>
          <p className="inline-block font-bold">{method}</p>: {complex}
        </li>
      ))}
    </ol>
  );
}
