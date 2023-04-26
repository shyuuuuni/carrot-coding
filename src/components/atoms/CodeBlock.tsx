import React from "react";

import ReactHighlightSyntax, { Language } from "react-highlight-syntax";

type Props = {
  code: string;
  language: string;
};

function getFormattedLanguage(language: string): Language {
  const languages: { [key: string]: Language } = {
    javascript: "JavaScript",
    java: "Java",
    "c++": "C++",
    python: "Python",
  };

  return languages[language] || "PlainText";
}

export default function CodeBlock({ code, language }: Props) {
  const formattedLanguage = getFormattedLanguage(language);

  return (
    <ReactHighlightSyntax language={formattedLanguage} copy>
      {code}
    </ReactHighlightSyntax>
  );
}
