import { getDictionary } from "@/get-translate";
import { Locale } from "@/i18n-config";
import LocaleSwitcher from "./components/locale-switcher";

export default async function Home({ params }: any) {
  const trans: any = await getDictionary(params?.locale);
  return (
    <div>
      <LocaleSwitcher />
      {trans.welcome}
      <br />
    </div>
  );
}
