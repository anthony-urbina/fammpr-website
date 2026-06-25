"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { t, type Lang, type Translations } from "@/lib/translations";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  tr: t.en,
});

function detectBrowserLang(): Lang {
  if (typeof navigator === "undefined") return "en";
  const pref = (navigator.languages?.[0] ?? navigator.language ?? "en")
    .toLowerCase()
    .slice(0, 2);
  return pref === "es" ? "es" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Detect browser language on mount (client only)
  useEffect(() => {
    setLangState(detectBrowserLang());
  }, []);

  const setLang = (l: Lang) => setLangState(l);

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
