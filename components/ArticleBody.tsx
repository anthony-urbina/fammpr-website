"use client";

import { ReactNode } from "react";
import { useLang } from "@/contexts/LanguageContext";

interface Props {
  bodyEn: ReactNode;
  bodyEs: ReactNode | null;
}

export default function ArticleBody({ bodyEn, bodyEs }: Props) {
  const { lang } = useLang();
  return <>{lang === "es" && bodyEs ? bodyEs : bodyEn}</>;
}
