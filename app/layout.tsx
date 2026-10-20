import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Goodwork Social | Make the work worth watching", description: "Social content built around the people, expertise and work that make your business worth choosing.", metadataBase: new URL("https://goodwork-social.vercel.app") };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
