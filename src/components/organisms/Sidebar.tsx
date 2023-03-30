import Link from "next/link";
import React, { useCallback, useState } from "react";

import SearchInput from "@/components/molecules/SearchInput";
import { SearchDataDS } from "@/types/types";

type Props = {
  searchDatas?: SearchDataDS[];
};

export default function Sidebar({ searchDatas = [] }: Props) {
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
            {searchDatas.map((searchData) => (
              <li key={searchData.id}>
                <Link href={searchData.link}>{searchData.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
