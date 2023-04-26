import React from "react";

type Props = {
  text: string;
};

export default function TextArea({ text }: Props) {
  return <div className="max-w-prose whitespace-pre-wrap text-lg">{text}</div>;
}
