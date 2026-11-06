
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yanique Bryson | Professional Portfolio",

  description:
    "Explore the professional experience, skills, education, and qualifications of Yanique Bryson, an operations, customer service, inventory management, and administration professional based in Oakland, California.",

  keywords: [
    "Yanique Bryson",
    "Professional Portfolio",
    "Customer Service",
    "Operations",
    "Inventory Management",
    "Administration",
    "Team Leadership",
    "Oakland California",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
