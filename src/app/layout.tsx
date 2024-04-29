import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavLink from "~/component/NavLink";
import classNames from "classnames";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Worawut Tititumjariy Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-black bg-white dark:text-white dark:bg-[#111010] __variable_ac79ff __variable_8a4d12">
      <body className={classNames('antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto', sans.className)}>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <aside className="-ml-[8px] mb-16 tracking-tight flex gap-3">
            <NavLink />
          </aside>
          {children}
        </main>
      </body>
    </html>
  );
}
