import React, { useEffect, useState } from "react";

type Props = {
  onClick: (isChecked: boolean) => void;
  defaultChecked?: boolean;
};

export default function Switch({ onClick, defaultChecked = false }: Props) {
  const [checked, setChecked] = useState(defaultChecked);

  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  const toggleChecked = () => {
    const nextChecked = !checked;
    onClick(nextChecked);
    setChecked(nextChecked);
  };

  const buttonKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.key !== "Tab") {
      e.preventDefault();
    }
    if (e.key === "Enter" || e.key === " ") {
      toggleChecked();
    }
  };

  const buttonClickHandler: React.MouseEventHandler<HTMLInputElement> = () => {
    toggleChecked();
  };

  return (
    <>
      <input
        id="dark-mode-btn"
        type="checkbox"
        value=""
        className="peer sr-only"
        checked={checked}
        onKeyDown={buttonKeyDownHandler}
        onClick={buttonClickHandler}
        readOnly
      />
      <div className="peer h-6 w-11 cursor-pointer rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-gray-800 after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:bg-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300  dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
    </>
  );
}
