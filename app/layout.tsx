import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Goodwork Social | Make the work worth watching",
    template: "%s | Goodwork Social",
  },
  description: "A social creative partner for businesses with something real to say. Strategy, social-first content and community built around what makes your business worth choosing.",
  metadataBase: new URL("https://goodwork-social.vercel.app"),
  openGraph: {
    title: "Goodwork Social | Make the work worth watching",
    description: "Thoughtful social strategy, content and community for businesses doing good work.",
    url: "https://goodwork-social.vercel.app",
    siteName: "Goodwork Social",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goodwork Social | Make the work worth watching",
    description: "Thoughtful social strategy, content and community for businesses doing good work.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
