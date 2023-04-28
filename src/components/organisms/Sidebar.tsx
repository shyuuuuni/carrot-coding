import React, { useCallback, useMemo, useState } from "react";

import SidebarMenu from "@/components/atoms/SidebarMenu";
import SearchInput from "@/components/molecules/SearchInput";
import { DataStructureSearchInfo } from "@/types/types";

type Props = {
  searchInfo?: DataStructureSearchInfo[];
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
    <div className="fixed h-full w-80 flex-none  p-4">
      <SearchInput
        value={searchInput}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
      />
      {sidebarMenus}
    </div>
  );
}
