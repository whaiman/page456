import { NextIntlClientProvider } from "next-intl";
import { getTranslations, getMessages, getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/locale-config";
import { Nav } from "@/components/nav";
import { Toaster } from "sonner";
import Script from "next/script";
import "../globals.css";

import {
  JetBrains_Mono,
  IBM_Plex_Sans,
  Space_Grotesk,
  Work_Sans,
} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700"],
  variable: "--font-jetbrains",
});
const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-plex",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space",
});
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-work",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Index" });

  return { title: t("title"), description: t("subtitle") };
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  if (!(routing.locales as readonly string[]).includes(locale)) notFound();
  const messages = await getMessages();
  const tNav = await getTranslations({ locale, namespace: "Nav" });

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${jetbrainsMono.variable} ${plexSans.variable} ${spaceGrotesk.variable} ${workSans.variable}`}
    >
      {/* <body className="bg-zinc-950 text-white min-h-screen antialiased"> */}
      <body className="antialiased min-h screen">
        <Script
          src="https://keepandroidopen.org/banner.js?size=minimal&link=https://keepandroidopen.org"
          strategy="afterInteractive"
        />
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Nav
              locale={locale as Locale}
              siteName={tNav("home")}
              infoMenuBadge={tNav("demoBadge")}
              demoTitle={tNav("demoTitle")}
              demoText={tNav("demoText")}
              supportTitle={tNav("supportTitle")}
              supportText={tNav("supportText")}
              supportButton={tNav("supportButton")}
              infoMenuLabel={tNav("infoMenuLabel")}
            />
            {children}
            <Toaster richColors position="bottom-right" theme="system" />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
