import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Agent",
  description: "Your AI Medical Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-cyan-50 via-cyan-100 to-cyan-200 dark:from-neutral-950 dark:via-cyan-950 dark:to-black relative">
            {/* Subtle blurred blobs */}
            <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-300 opacity-30 blur-3xl dark:bg-cyan-800" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-200 opacity-20 blur-2xl dark:bg-blue-900" />

            {/* Optional borders for structure */}
            <div className="absolute inset-y-0 left-0 h-full w-px bg-cyan-100/80 dark:bg-neutral-800/80">
              <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
            </div>
            <div className="absolute inset-y-0 right-0 h-full w-px bg-cyan-100/80 dark:bg-neutral-800/80">
              <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px w-full bg-cyan-100/80 dark:bg-neutral-800/80">
              <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            </div>

            {/* Main content */}
            <Provider>{children}</Provider>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
