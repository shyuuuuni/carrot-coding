import React, { useCallback, useState } from "react";

import SearchInput from "@/components/molecules/SearchInput";

export default function Sidebar() {
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
      {isSearching ? <div>검색결과 for {searchWord}</div> : <div>기본결과</div>}
    </div>
  );
}
