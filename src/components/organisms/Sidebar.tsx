import React, { useCallback, useState } from "react";

import Link from "next/link";

import SearchInput from "@/components/molecules/SearchInput";
import { DataStructureSearchInfo } from "@/types/types";

type Props = {
  searchInfo?: DataStructureSearchInfo[];
};

export default function Sidebar({ searchInfo = [] }: Props) {
  const [searchInput, setSearchInput] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const isSearching = searchWord.length > 0;

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
    <div className="h-full w-80 border-l border-r border-gray-700 p-4">
      <SearchInput
        value={searchInput}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
      />
      {isSearching ? (
        <div>검색결과 for {searchWord}</div>
      ) : (
        <nav>
          <ul>
            {searchInfo.map((search) => (
              <li key={search.name}>
                <Link href={search.link}>{search.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
