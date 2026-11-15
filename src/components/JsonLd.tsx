import React from "react";

export type JsonLdValue = Record<string, unknown> | Record<string, unknown>[];

interface JsonLdProps {
  data: JsonLdValue;
  id?: string;
}

/**
 * Server-rendered JSON-LD injector.
 * Escapes literal `<` characters as `\u003c` to prevent script-tag breakout.
 */
export function JsonLd({ data, id }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
