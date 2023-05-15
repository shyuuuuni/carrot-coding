import React, { useCallback, useMemo, useState } from "react";

import SidebarMenu from "@/components/atoms/SidebarMenu";
import SearchInput from "@/components/molecules/SearchInput";
import { SearchInfo } from "@/types/types";

type Props = {
  searchInfo?: SearchInfo[];
};

export default function Sidebar({ searchInfo = [] }: Props) {
  const [searchInput, setSearchInput] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const sidebarMenus = useMemo(() => {
    const info =
      searchWord.length === 0
        ? searchInfo
        : searchInfo.filter(({ name }) => {
            return name.en.includes(searchWord) || name.kr.includes(searchWord);
          });

    return info.map(({ name, link, description }) => (
      <SidebarMenu
        key={name.en}
        name={name}
        link={link}
        description={description}
      />
    ));
  }, [searchInfo, searchWord]);

  // Handle on changing input box
  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      ({ target: { value } }) => {
        setSearchInput(value);
      },
      [setSearchInput]
    );

  // Handle on submitting input box
  const handleSearchSubmit = useCallback(() => {
    const filteredInput = searchInput.trim();
    setSearchWord(filteredInput);
  }, [searchInput, setSearchWord]);

  return (
    <div className="fixed top-20 bottom-0 w-80 flex-none overflow-y-auto p-4 pb-8 pt-0 lg:block">
      <div className="sticky top-0">
        <div className="h-6 w-full bg-gray-200 dark:bg-gray-800" />
        <SearchInput
          value={searchInput}
          onChange={handleSearchChange}
          onSubmit={handleSearchSubmit}
        />
      </div>
      <ul className="flex flex-col gap-1">{sidebarMenus}</ul>
    </div>
  );
}
