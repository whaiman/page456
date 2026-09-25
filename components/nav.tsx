import Link from "next/link";
import { LanguageSwitcher } from "./language-switcher";
import { InfoMenu } from "./info-menu";
import type { Locale } from "@/i18n/locale-config";
import { ThemeToggle } from "./theme-toggle";

const BUY_ME_A_COFFEE_URL = "https://www.buymeacoffee.com/whaiman";

export function Nav({
  locale,
  siteName,
  infoMenuBadge,
  demoTitle,
  demoText,
  supportTitle,
  supportText,
  supportButton,
  infoMenuLabel,
}: {
  locale: Locale;
  siteName: string;
  infoMenuBadge: string;
  demoTitle: string;
  demoText: string;
  supportTitle: string;
  supportText: string;
  supportButton: string;
  infoMenuLabel: string;
}) {
  return (
    // <nav className="sticky top-0 z-[100] bg-zinc-950/80 backdrop-blur border-b border-zinc-800/60">
    <nav className="sticky top-0 z-[100] bg-surface/90 backdrop-blur border-b border-border">
      <div className="max-w-3xl mx-auto flex items-center justify-between gap-2 px-4 py-3">
        <Link
          href={`/${locale}`}
          // className="text-sm font-extrabold text-emerald-400 hover:text-emerald-300 transition tracking-tight"
          className="font-heading text-xl font-bold text-text-strong hover:text-primary transition tracking-tight"
        >
          {siteName}
        </Link>

        <div className="flex items-center gap-2">
          <LanguageSwitcher currentLocale={locale} />
          <ThemeToggle />
          <InfoMenu
            badgeLabel={infoMenuBadge}
            demoTitle={demoTitle}
            demoText={demoText}
            supportTitle={supportTitle}
            supportText={supportText}
            supportButton={supportButton}
            coffeeUrl={BUY_ME_A_COFFEE_URL}
            triggerLabel={infoMenuLabel}
          />
        </div>
      </div>
    </nav>
  );
}
