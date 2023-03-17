import Link from "next/link";
import React from "react";

type Props = {
  link: string;
  title: string;
};

export default function NavLink({ link, title }: Props) {
  return (
    <Link href={link}>
      <p className="mt-0 block text-gray-200 hover:text-gray-300">{title}</p>
    </Link>
  );
}
