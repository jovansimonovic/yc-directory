import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "easymde/dist/easymde.min.css";

const workSans = localFont({
  src: [
    {
      path: "./fonts/WorkSans-Thin.ttf",
      weight: "100",
    },
    {
      path: "./fonts/WorkSans-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "./fonts/WorkSans-Light.ttf",
      weight: "300",
    },
    {
      path: "./fonts/WorkSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/WorkSans-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/WorkSans-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/WorkSans-Bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/WorkSans-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "./fonts/WorkSans-black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
