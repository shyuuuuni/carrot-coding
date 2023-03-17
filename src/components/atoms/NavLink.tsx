import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  link: string;
  title: string;
};

export default function NavLink({ link, title }: Props) {
  const router = useRouter();
  const selected = router.asPath === link;

  return (
    <Link href={link}>
      <p
        className={
          selected
            ? "mt-0 block font-bold text-green-500"
            : "mt-0 block text-gray-200 hover:text-gray-300"
        }
      >
        {title}
      </p>
    </Link>
  );
}
