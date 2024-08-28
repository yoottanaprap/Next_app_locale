"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../../i18n-config";

export default function LocaleSwitcher({params}:any) {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <ul style={{ display: "flex" }}>
        {i18n.locales.map((locale, idx) => {
          return (
            <li key={idx} style={{ marginRight: "1rem" }}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
