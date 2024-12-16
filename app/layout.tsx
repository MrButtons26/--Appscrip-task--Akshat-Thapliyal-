import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopping App",
  description: "Shopping WebsiteDiscover thousands of products at unbeatable prices. Shop electronics, fashion, home goods, and more. Free shipping on orders over $50!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
