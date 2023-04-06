import React from "react";

type Props = {
  text: string;
};

export default function TextArea({ text }: Props) {
  return <div className="text-lg">{text}</div>;
}
