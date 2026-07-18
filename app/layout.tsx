import type { Metadata } from "next";
import "../src/index.css";

export const metadata: Metadata = {
  title: "7 Lenz Wedd Planner",
  description: "Luxury wedding photography, cinematic films, and premium event coverage in Kerala.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en_IN">
      <body>{children}</body>
    </html>
  );
}
