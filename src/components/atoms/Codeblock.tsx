import React from "react";

import { Prism, PrismProps } from "@mantine/prism";

type Props = {
  code: string;
} & Pick<PrismProps, "language">;

export default function Codeblock({ language, code }: Props) {
  return (
    <Prism className="max-w-4xl" colorScheme="light" language={language}>
      {code}
    </Prism>
  );
}
