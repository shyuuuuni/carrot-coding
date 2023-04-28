import React from "react";

import Link from "next/link";

type Props = {
  name: {
    kr: string;
    en: string;
  };
  link: string;
  description: string;
};

export default function SidebarMenu({ name, link, description }: Props) {
  return (
    <li className="group list-none rounded-md hover:bg-gray-300 dark:hover:bg-gray-900">
      <Link href={link}>
        <div className="flex flex-col p-2">
          <div className="flex flex-row gap-2">
            <p className="text-xl font-bold">{name.kr}</p>
            <p className="text-l mt-auto flex flex-col text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-300">
              {name.en}
            </p>
          </div>
          <div className="h-{18} w-full text-base text-gray-500 line-clamp-3 group-hover:text-gray-900  dark:text-gray-400 dark:group-hover:text-gray-300">
            {description}
          </div>
        </div>
      </Link>
    </li>
  );
}
